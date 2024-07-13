import { Plugin, WorkspaceLeaf } from "obsidian";
import { ChatView, VIEW_TYPE_CHAT } from "./view/ChatView";
import { Headers, Request, Response } from "node-fetch";
import { ClaudeSettingsTab } from "./settingsTab";

// @ts-ignore
globalThis.fetch = fetch;
// @ts-ignore
globalThis.Headers = Headers;
// @ts-ignore
globalThis.Request = Request;
// @ts-ignore
globalThis.Response = Response;

interface ClaudePluginSettings {
    apiKey: string;
}

const DEFAULT_SETTINGS: Partial<ClaudePluginSettings> = {
    apiKey: "",
};

export default class ClaudePlugin extends Plugin {
    settings!: ClaudePluginSettings;

    async onload() {
        await this.loadSettings();
        this.registerView(
            VIEW_TYPE_CHAT,
            (leaf) => new ChatView(leaf, this.settings.apiKey),
        );

        this.addRibbonIcon("message-circle", "Show assistant", () => {
            this.activateView();
        });

        this.addSettingTab(new ClaudeSettingsTab(this.app, this));
    }

    async loadSettings() {
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData(),
        );
    }
    async activateView() {
        const { workspace } = this.app;
        // this.registerMarkdownPostProcessor((element, context) => {
        //     const codeblocks = element.findAll("code");

        //     for (let codeblock of codeblocks) {
        //         break
        //     });
        let leaf: WorkspaceLeaf | null = null;
        const leaves = workspace.getLeavesOfType(VIEW_TYPE_CHAT);

        if (leaves.length > 0) {
            // A leaf with our view already exists, use that
            leaf = leaves[0];
        } else {
            // Our view could not be found in the workspace, create a new leaf
            // in the right sidebar for it
            leaf = workspace.getRightLeaf(false);
            if (!leaf) {
                leaf = workspace.getLeaf(true);
            }
            await leaf.setViewState({ type: VIEW_TYPE_CHAT, active: true });
        }

        // "Reveal" the leaf in case it is in a collapsed sidebar
        !!leaf ? workspace.revealLeaf(leaf) : null;
    }
    async saveSettings() {
        await this.saveData(this.settings);
    }
    async onunload() {}
}
