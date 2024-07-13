import { ItemView, WorkspaceLeaf } from "obsidian";

import Chat from "./Chat.svelte";

export const VIEW_TYPE_CHAT = "chat-view";

export class ChatView extends ItemView {
    // @ts-ignore
    component: Chat;
    apiKey: string;
    constructor(leaf: WorkspaceLeaf, apiKey: string) {
        super(leaf);
        this.apiKey = apiKey;
    }

    getViewType() {
        return VIEW_TYPE_CHAT;
    }

    getDisplayText() {
        return "Claude Chat";
    }

    async onOpen() {
        this.component = new Chat({
            target: this.contentEl,
            props: {
                apiKey: this.apiKey,
                app: this.app, // Add this line
                component: this.contentEl, // Add this line
            },
        });
    }

    async onClose() {
        this.component.$destroy();
    }
}
