# frozen_string_literal: true

module UI
  class ToggleGroupComponent < ApplicationComponent
    BASE = "inline-flex gap-1"

    def initialize(type: :single, value: nil, **html_attrs)
      @type = type.to_sym
      @value = Array(value).map(&:to_s)
      @extra_class = html_attrs.delete(:class)
      @html_attrs = html_attrs
    end

    def call
      content_tag(:div,
        content,
        class: cn(BASE, @extra_class),
        role: "group",
        "data-controller": "toggle-group",
        "data-toggle-group-type-value": @type,
        **@html_attrs)
    end

    def item_pressed?(item_value)
      @value.include?(item_value.to_s)
    end
  end
end
