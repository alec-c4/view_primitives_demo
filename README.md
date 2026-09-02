# ViewPrimitives — a shadcn/ui for Rails

[![Gem Version](https://badge.fury.io/rb/view_primitives.svg)](https://rubygems.org/gems/view_primitives)
[![Build Status](https://github.com/alec-c4/view_primitives/actions/workflows/main.yml/badge.svg)](https://github.com/alec-c4/view_primitives/actions)

**82 beautifully designed UI components for Rails — no npm, no build step, no lock-in.**
This repo is the live catalog: every component, every variant, in one page.

## Why ViewPrimitives?

Most component kits force a trade-off: install a gem and lose control of the
markup, or copy-paste and lose upgrades forever. ViewPrimitives refuses to
choose.

- **You own the code.** `rails g view_primitives:add button` copies real
  Ruby + ERB into `app/components/ui/` — yours to edit, no black box. Same
  idea shadcn/ui made popular for React, done as a proper Rails generator
  instead of a separate CLI.
- **Or don't eject at all.** Add the gem to your `Gemfile` and call
  `ui :button` immediately — every component ships inside the gem too. This
  demo runs that way. Upgrade with `bundle update` when you want the easy
  path, `rails g view_primitives:update` when you've customized.
- **Real components, not string soup.** Built on
  [ViewComponent](https://viewcomponent.org) — testable, inheritable Ruby
  objects, not `content_tag` spaghetti or opaque helper methods.
- **Zero JS build.** Interactivity is plain Stimulus, shipped via
  `importmap-rails`. No Node, no webpack, no `package.json` to keep in sync.
- **Tailwind v4, config-free.** Design tokens live in `@theme inline` CSS —
  no `tailwind.config.js`, dark mode and optional color themes
  (`rails g view_primitives:theme rose`) included.
- **Dual API.** `ui :badge, "New", variant: :outline` for the simple case,
  full slot API (`with_trigger`, `with_footer`, …) for anything richer —
  Ruby ergonomics, not a JSON props blob.

## Why it's the Rails Way

ViewPrimitives doesn't bolt a JS framework onto Rails — it extends Rails with
the tools Rails already gives you:

- **Generators, not a CLI.** `rails g view_primitives:add|update|list|theme`
  — the same interface you already use for scaffolds and migrations.
- **Server-rendered by default.** Built for Turbo Drive/Frames, not a SPA —
  progressive enhancement, not a client-side runtime to fight.
  <br>_Note: this demo repo itself has no Turbo features wired up — the
  components ship Turbo-ready, this catalog just hasn't exercised them yet._
- **Convention over configuration.** Components resolve as `UI::ButtonComponent`
  via a registered Rails acronym — `ui :button` just works, no manifest to
  maintain.
- **Boring, dependable infra.** This demo runs on SQLite + Solid
  Queue/Cache/Cable — the Rails 8 default stack, zero external services.

## Run the demo

```bash
bin/setup   # bundle install + db:prepare
bin/dev     # boots the server (Tailwind builds automatically)
```

Open **http://localhost:3000**.

## Browse the components

Everything lives on one page (`DemoController#index`). The sidebar lists all
82 components — click one to scroll straight to it (Stimulus `scrollspy`
keeps the active link in sync). Each section shows several real-world
variants side by side; open `app/views/demo/index.html.erb` to see the exact
`ui(...)` call behind any example.

## Learn more

- Gem: [rubygems.org/gems/view_primitives](https://rubygems.org/gems/view_primitives)
- Source & docs: [github.com/alec-c4/view_primitives](https://github.com/alec-c4/view_primitives)
