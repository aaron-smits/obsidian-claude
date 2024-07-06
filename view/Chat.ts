import { ItemView, WorkspaceLeaf } from "obsidian";

import Chat from "./Chat.svelte";

export const VIEW_TYPE_CHAT = "chat-view";

export class ChatView extends ItemView {
    component: Chat;

    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType() {
        return VIEW_TYPE_CHAT;
    }

    getDisplayText() {
        return "Example view";
    }

    async onOpen() {
        this.component = new Chat({
            target: this.contentEl,
        });
    }

    async onClose() {
        this.component.$destroy();
    }
}
