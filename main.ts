import { Plugin, WorkspaceLeaf } from "obsidian";
import { ChatView, VIEW_TYPE_CHAT } from "./view/Chat";

export default class ClaudePlugin extends Plugin {
    async onload() {
        this.registerView(VIEW_TYPE_CHAT, (leaf) => new ChatView(leaf));

        this.addRibbonIcon("message-circle", "Activate view", () => {
            this.activateView();
        });
    }

    async onunload() {}

    async activateView() {
        const { workspace } = this.app;

        let leaf: WorkspaceLeaf | null = null;
        const leaves = workspace.getLeavesOfType(VIEW_TYPE_CHAT);

        if (leaves.length > 0) {
            // A leaf with our view already exists, use that
            leaf = leaves[0];
        } else {
            // Our view could not be found in the workspace, create a new leaf
            // in the right sidebar for it
            leaf = workspace.getRightLeaf(false);
            await leaf.setViewState({ type: VIEW_TYPE_CHAT, active: true });
        }

        // "Reveal" the leaf in case it is in a collapsed sidebar
        workspace.revealLeaf(leaf);
    }
}
