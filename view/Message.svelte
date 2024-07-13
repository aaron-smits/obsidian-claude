<script lang="ts">
    import Anthropic from "@anthropic-ai/sdk";
    import type { App, Component } from "obsidian";
    import { MarkdownRenderer, Notice } from "obsidian";
    export let component: Component;
    export let app: App; // Add this line to receive the Obsidian app instance
    export let message: Anthropic.MessageParam;
    export let index: number;

    function renderMarkdown(content: string): string {
        const div = document.createElement("div");
        MarkdownRenderer.render(app, content, div, ".", component);
        return div.innerHTML;
    }
    function handleCopy(node: HTMLElement) {
        function copyText(event: Event) {
            const target = event.target as HTMLElement;
            if (target.classList.contains("copy-code-button")) {
                const codeBlock = target.closest("pre")?.querySelector("code");
                if (codeBlock) {
                    navigator.clipboard.writeText(
                        codeBlock.textContent?.toString() || "",
                    );
                    new Notice("Code copied to clipboard");
                } else {
                    new Notice("No code block found: error copying code");
                }
            }
        }

        node.addEventListener("click", copyText);

        return {
            destroy() {
                node.removeEventListener("click", copyText);
            },
        };
    }
</script>

<div data-index={index} use:handleCopy>
    <div class="message-header">
        {message.role}
    </div>
    <div class="message-content">
        {@html renderMarkdown(message.content.toString())}
    </div>
</div>

<style>
    .message-header {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .message-content {
        margin-bottom: 10px;
    }
</style>
