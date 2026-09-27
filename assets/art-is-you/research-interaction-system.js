(function () {
  "use strict";

  function setClass(items, item, state) {
    items.forEach(function (candidate) {
      candidate.classList.toggle("is-preview", state === "preview" && candidate === item);
      candidate.classList.toggle("is-selected", state === "selected" && candidate === item);
    });
  }

  function initProtoarchive() {
    var root = document.querySelector(".prearchive-linear[data-prearchive-linear]");
    if (!root) return;
    var events = Array.prototype.slice.call(root.querySelectorAll(".pl-event"));
    if (!events.length) return;
    if (root.dataset.researchInteractionReady) {
      bindProtoarchiveEvents(root);
      return;
    }
    root.dataset.researchInteractionReady = "true";
    var selected = null;

    function apply(item, state) {
      setClass(Array.prototype.slice.call(root.querySelectorAll(".pl-event")), item, state);
      if (state) root.dataset.interactionState = state;
      else root.removeAttribute("data-interaction-state");
    }
    function clear() { selected = null; apply(null, ""); }
    function bind(item) {
      if (item.dataset.researchInteractionBound) return;
      item.dataset.researchInteractionBound = "true";
      var title = item.querySelector(".pl-name");
      item.tabIndex = 0;
      item.setAttribute("aria-label", "Выбрать кейс: " + (title ? title.textContent.trim() : "Преархив"));
      item.addEventListener("pointerenter", function () { if (!selected) apply(item, "preview"); });
      item.addEventListener("pointerleave", function () { if (!selected) apply(null, ""); });
      item.addEventListener("focus", function () { if (!selected) apply(item, "preview"); });
      item.addEventListener("blur", function () { if (!selected) apply(null, ""); });
      item.addEventListener("click", function (event) {
        if (event.target.closest("a")) return;
        selected = selected === item ? null : item;
        apply(selected, selected ? "selected" : "");
      });
      item.addEventListener("keydown", function (event) {
        if (event.target !== item) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selected = selected === item ? null : item;
          apply(selected, selected ? "selected" : "");
        }
      });
    }
    events.forEach(bind);
    root._researchInteractionBind = bind;
    new MutationObserver(function () { bindProtoarchiveEvents(root); }).observe(root, { childList: true, subtree: true });
    root.addEventListener("keydown", function (event) { if (event.key === "Escape") clear(); });
    document.addEventListener("pointerdown", function (event) { if (!event.target.closest('.pl-event')) clear(); });
  }

  function bindProtoarchiveEvents(root) {
    if (!root._researchInteractionBind) return;
    root.querySelectorAll(".pl-event").forEach(root._researchInteractionBind);
  }

  function initLab() {
    var root = document.querySelector(".lab-page");
    if (!root) return;
    var links = Array.prototype.slice.call(root.querySelectorAll(".lab-index__card[href^='#']"));
    if (!links.length) return;
    if (root.dataset.researchInteractionReady) {
      bindLabCards(root);
      return;
    }
    root.dataset.researchInteractionReady = "true";
    var selected = null;

    function targetFor(link) {
      var anchor = root.querySelector(link.getAttribute("href"));
      return anchor && anchor.nextElementSibling && anchor.nextElementSibling.classList.contains("lab-case") ? anchor.nextElementSibling : null;
    }
    function apply(link, state) {
      Array.prototype.slice.call(root.querySelectorAll(".lab-index__card[href^='#']")).forEach(function (candidate) { candidate.classList.toggle("is-preview", state === "preview" && candidate === link); candidate.classList.toggle("is-selected", state === "selected" && candidate === link); });
      Array.prototype.slice.call(root.querySelectorAll(".lab-case")).forEach(function (caseNode) { caseNode.classList.remove("is-preview", "is-selected"); });
      var target = link && targetFor(link);
      if (target && state) target.classList.add(state === "selected" ? "is-selected" : "is-preview");
      if (state) root.dataset.interactionState = state;
      else root.removeAttribute("data-interaction-state");
    }
    var dismissedHash = null;
    function clear() { dismissedHash = location.hash; selected = null; apply(null, ""); }
    function bind(link) {
      if (link.dataset.researchInteractionBound) return;
      link.dataset.researchInteractionBound = "true";
      link.addEventListener("pointerenter", function () { if (!selected) apply(link, "preview"); });
      link.addEventListener("pointerleave", function () { if (!selected) apply(null, ""); });
      link.addEventListener("focus", function () { if (!selected) apply(link, "preview"); });
      link.addEventListener("blur", function () { if (!selected) apply(null, ""); });
      link.addEventListener("click", function () { dismissedHash = null; selected = selected === link ? null : link; apply(selected, selected ? "selected" : ""); });
    }
    links.forEach(bind);
    root._researchInteractionBind = bind;
    new MutationObserver(function () { bindLabCards(root); }).observe(root, { childList: true, subtree: true });
    root.addEventListener("keydown", function (event) { if (event.key === "Escape") clear(); });
    window.addEventListener("hashchange", function () {
      if (location.hash === dismissedHash) return;
      var matching = links.find(function (link) { return link.getAttribute("href") === location.hash; });
      if (matching) { selected = matching; apply(matching, "selected"); }
    });
  }

  function bindLabCards(root) {
    if (!root._researchInteractionBind) return;
    root.querySelectorAll(".lab-index__card[href^='#']").forEach(root._researchInteractionBind);
  }

  function init() {
    initProtoarchive();
    initLab();
    /* Protoarchive events are mounted by the existing deferred canonicalizer. */
    var pending = document.querySelector(".prearchive-linear[data-prearchive-linear]");
    if (pending && !pending.querySelector(".pl-event[data-research-interaction-bound]")) window.setTimeout(init, 120);
    var labPending = document.querySelector(".lab-page");
    if (labPending && !labPending.querySelector(".lab-index__card[data-research-interaction-bound]")) window.setTimeout(init, 120);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
