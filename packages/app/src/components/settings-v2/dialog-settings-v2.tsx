import { Component, createMemo, createSignal, startTransition } from "solid-js"
import { Dialog } from "@opencode-ai/ui/v2/dialog-v2"
import { TabsV2 } from "@opencode-ai/ui/v2/tabs-v2"
import { Icon } from "@opencode-ai/ui/icon"
import { useLanguage } from "@/context/language"
import { usePlatform } from "@/context/platform"
import { SettingsGeneralV2 } from "./general"
import { SettingsKeybinds } from "../settings-keybinds"
import { SettingsProvidersV2 } from "./providers"
import { SettingsModelsV2 } from "./models"
import "./settings-v2.css"
import { SettingsServersV2 } from "./servers"
import { useDialog } from "@opencode-ai/ui/context/dialog"
import { useLayout } from "@/context/layout"
import { useTabs } from "@/context/tabs"
import { useServerSync } from "@/context/server-sync"
import { SettingsSmartAgent } from "../settings-smart-agent"

export const DialogSettings: Component<{
  sessionID?: string
  defaultValue?: string
}> = (props) => {
  const language = useLanguage()
  const platform = usePlatform()
  const dialog = useDialog()
  const layout = useLayout()
  const tabs = useTabs()
  const serverSync = useServerSync()
  const [tab, setTab] = createSignal(props.defaultValue ?? "general")

  return (
    <Dialog title={language.t("dialog.settings.title")} onClose={() => dialog.clear()}>
      <TabsV2 value={tab()} onChange={(val) => startTransition(() => setTab(val))}>
        <TabsV2.List>
          <TabsV2.Trigger value="general">{language.t("dialog.settings.tab.general")}</TabsV2.Trigger>
          <TabsV2.Trigger value="smart-agent" id="tab-smart-agent-v2">smart-agent</TabsV2.Trigger>
          <TabsV2.Trigger value="models">{language.t("dialog.settings.tab.models")}</TabsV2.Trigger>
          <TabsV2.Trigger value="providers">{language.t("dialog.settings.tab.providers")}</TabsV2.Trigger>
          <TabsV2.Trigger value="keybinds">{language.t("dialog.settings.tab.keybinds")}</TabsV2.Trigger>
          <TabsV2.Trigger value="servers">{language.t("dialog.settings.tab.mcp_servers")}</TabsV2.Trigger>
        </TabsV2.List>
        <TabsV2.Content value="general">
          <SettingsGeneralV2 />
        </TabsV2.Content>
        <TabsV2.Content value="smart-agent">
          <SettingsSmartAgent />
        </TabsV2.Content>
        <TabsV2.Content value="models">
          <SettingsModelsV2 />
        </TabsV2.Content>
        <TabsV2.Content value="providers">
          <SettingsProvidersV2 />
        </TabsV2.Content>
        <TabsV2.Content value="keybinds">
          <SettingsKeybinds />
        </TabsV2.Content>
        <TabsV2.Content value="servers">
          <SettingsServersV2 />
        </TabsV2.Content>
      </TabsV2>
    </Dialog>
  )
}
