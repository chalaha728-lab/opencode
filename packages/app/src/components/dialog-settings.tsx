import { Component, createSignal, startTransition } from "solid-js"
import { Dialog } from "@opencode-ai/ui/dialog"
import { Tabs } from "@opencode-ai/ui/tabs"
import { Icon } from "@opencode-ai/ui/icon"
import { useLanguage } from "@/context/language"
import { usePlatform } from "@/context/platform"
import { useDialog } from "@opencode-ai/ui/context/dialog"
import { SettingsGeneral } from "./settings-general"
import { SettingsKeybinds } from "./settings-keybinds"
import { SettingsProviders } from "./settings-providers"
import { SettingsModels } from "./settings-models"
import { SettingsServers } from "./settings-servers"
import { SettingsSmartAgent } from "./settings-smart-agent"

export const DialogSettings: Component<{ defaultValue?: string }> = (props) => {
  const language = useLanguage()
  const platform = usePlatform()
  const dialog = useDialog()
  const [tab, setTab] = createSignal(props.defaultValue ?? "general")

  return (
    <Dialog title={language.t("dialog.settings.title")} onClose={() => dialog.clear()}>
      <Tabs value={tab()} onChange={(val) => startTransition(() => setTab(val))}>
        <Tabs.List>
          <Tabs.Trigger value="general">{language.t("dialog.settings.tab.general")}</Tabs.Trigger>
          <Tabs.Trigger value="smart-agent" id="tab-smart-agent">smart-agent</Tabs.Trigger>
          <Tabs.Trigger value="models">{language.t("dialog.settings.tab.models")}</Tabs.Trigger>
          <Tabs.Trigger value="providers">{language.t("dialog.settings.tab.providers")}</Tabs.Trigger>
          <Tabs.Trigger value="keybinds">{language.t("dialog.settings.tab.keybinds")}</Tabs.Trigger>
          <Tabs.Trigger value="servers">{language.t("dialog.settings.tab.mcp_servers")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="general">
          <SettingsGeneral />
        </Tabs.Content>
        <Tabs.Content value="smart-agent">
          <SettingsSmartAgent />
        </Tabs.Content>
        <Tabs.Content value="models">
          <SettingsModels />
        </Tabs.Content>
        <Tabs.Content value="providers">
          <SettingsProviders />
        </Tabs.Content>
        <Tabs.Content value="keybinds">
          <SettingsKeybinds />
        </Tabs.Content>
        <Tabs.Content value="servers">
          <SettingsServers />
        </Tabs.Content>
      </Tabs>
    </Dialog>
  )
}
