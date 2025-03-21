import "@hotwired/turbo-rails"
import { Turbo } from "@hotwired/turbo-rails"
import Rails from "@rails/ujs"
import "turbo-rails"

Rails.start();
window.Turbo = Turbo;  // ← 追加！
console.log('Hello World from Webpacker');