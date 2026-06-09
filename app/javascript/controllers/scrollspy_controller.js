import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["link"]
  static values  = { root: String }

  #observer = null

  connect() {
    this.#observer = new IntersectionObserver(
      (entries) => this.#onIntersect(entries),
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )
    this.#sections().forEach(el => this.#observer.observe(el))
  }

  disconnect() {
    this.#observer?.disconnect()
  }

  #sections() {
    return this.linkTargets
      .map(a => document.getElementById(a.getAttribute("href").slice(1)))
      .filter(Boolean)
  }

  #onIntersect(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const id = entry.target.id
      this.linkTargets.forEach(a => {
        const active = a.getAttribute("href") === `#${id}`
        a.classList.toggle("text-foreground", active)
        a.classList.toggle("bg-accent", active)
        a.classList.toggle("font-medium", active)
        a.classList.toggle("text-muted-foreground", !active)
      })
    })
  }
}
