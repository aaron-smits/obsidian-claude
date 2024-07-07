import ClaudePlugin from "./main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class ClaudeSettingsTab extends PluginSettingTab {
    plugin: ClaudePlugin;

    constructor(app: App, plugin: ClaudePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();
        new Setting(containerEl)
            .setName("Anthropic API Key")
            .setDesc("Your API key for the Anthropic API")
            .addText((text) =>
                text
                    .setPlaceholder("API Key")
                    .setValue(this.plugin.settings.apiKey)
                    .then((text) => {
                        text.inputEl.type = "password";
                    })
                    .onChange(async (value) => {
                        this.plugin.settings.apiKey = value;
                        await this.plugin.saveSettings();
                    }),
            );
        new Setting(containerEl);
    }
}
