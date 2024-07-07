<script lang="ts">
    import Anthropic from "@anthropic-ai/sdk";
    import { onMount, afterUpdate } from "svelte";
    import { MarkdownRenderer } from "obsidian";
    import type { App, Component } from "obsidian";
    export let app: App; // Add this line to receive the Obsidian app instance
    export let component: Component;

    function renderMarkdown(content: string): string {
        const div = document.createElement("div");
        MarkdownRenderer.render(app, content, div, ".", component);
        return div.innerHTML;
    }
    export let apiKey: string;

    const anthropic = new Anthropic({
        apiKey: apiKey,
    });

    let messages: Anthropic.MessageParam[] = [];
    let isLoading = false;
    let inputMessage = "";
    let maxTokens = 1000;

    let models = [
        "claude-3-5-sonnet-20240620",
        "claude-3-opus-20240229",
        "claude-3-sonnet-20240229",
        "claude-3-haiku-20240307",
        "claude-2.1",
        "claude-2.0",
        "claude-instant-1.2",
    ];
    let selectedModel: string = models[0];

    async function streamMessages() {
        const stream = anthropic.messages.stream({
            model: selectedModel,
            max_tokens: maxTokens,
            messages: messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
            })),
        });

        let assistantResponse: Anthropic.MessageParam = {
            role: "assistant",
            content: "",
        };
        messages = [...messages, assistantResponse];

        stream.on("text", (text) => {
            assistantResponse.content += text;
            messages = [...messages.slice(0, -1), assistantResponse];
        });

        stream.on("error", (error) => {
            console.error("Error:", error);
            let errorMessage: Anthropic.MessageParam = {
                role: "assistant",
                content: "Error: " + error.message,
            };
            messages = [...messages, errorMessage];
        });
        await stream.done();
        return messages;
    }
    async function sendMessage() {
        if (!inputMessage.trim()) return;
        isLoading = true;
        const userMessage: Anthropic.MessageParam = {
            role: "user",
            content: inputMessage,
        };
        inputMessage = ""; // Clear input after sending
        messages = [...messages, userMessage];

        try {
            messages = await streamMessages();
        } catch (e) {
            console.error("Error:", e);
            let errorMessage: Anthropic.MessageParam = {
                role: "assistant",
                content: "Error: " + e.message,
            };
            messages = [...messages, errorMessage];
        } finally {
            isLoading = false;
        }
    }
</script>

<div class="chat-container">
    <div class="messages">
        {#each messages as message}
            <div class={message.role}>
                {message.role} :
            </div>
            {@html renderMarkdown(message.content)}
        {/each}
        {#if isLoading}
            <div class="loading">...</div>
        {/if}
    </div>
    <div class="input-area">
        <input
            type="text"
            bind:value={inputMessage}
            on:keypress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
        />
        <button on:click={sendMessage} disabled={isLoading}>Send</button>
        <div class="model-select">
            <select id="model-dropdown" bind:value={selectedModel}>
                {#each models as model}
                    <option value={model}>{model}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<style>
    .chat-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 1px auto;
        max-width: 100%;
    }

    .messages {
        flex-grow: 1;
        overflow-y: auto;
    }

    .message-content {
        white-space: pre-wrap;
    }

    .user {
        padding-bottom: 2px;
    }

    .assistant {
        padding-bottom: 2px;
    }

    .chat-message {
        display: flex;
    }
    .message-content {
        padding-bottom: 10px;
        white-space: pre-wrap;
    }

    .input-area {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    input {
        flex-grow: 1;
    }

    button {
        padding: 5px 10px;
    }

    .loading {
        font-style: italic;
        color: #888;
    }
</style>
