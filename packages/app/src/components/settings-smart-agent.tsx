import { Component, createSignal } from "solid-js"

export const SettingsSmartAgent: Component = () => {
  const [enabled, setEnabled] = createSignal(true)

  return (
    <div class="flex flex-col gap-4 p-4 text-text-base font-sans" id="smart-agent-panel">
      <div class="flex flex-col gap-1 border-b border-border-weak pb-3">
        <h2 class="text-sm font-bold text-text-base">Smart Agent</h2>
        <p class="text-xs text-text-muted">Configure autonomous agent capabilities for your workspace.</p>
      </div>

      <div class="flex items-center justify-between p-3 rounded-lg bg-surface-base border border-border-weak">
        <div class="flex flex-col gap-0.5 pr-4">
          <label for="smart-agent-checkbox" class="text-xs font-semibold text-text-base cursor-pointer">
            Enable Smart Agent
          </label>
          <span class="text-[11px] text-text-muted">
            Enable autonomous task planning and smart context capabilities.
          </span>
        </div>
        <input
          type="checkbox"
          id="smart-agent-checkbox"
          checked={enabled()}
          onChange={(e) => setEnabled(e.currentTarget.checked)}
          class="w-4 h-4 accent-accent-base cursor-pointer rounded"
        />
      </div>
    </div>
  )
}
