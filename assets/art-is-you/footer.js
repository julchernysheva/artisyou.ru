(function () {

    var footerSelector = ".ay-site-footer";


    var rules = [
      {
        container: ".ay-site-footer",
        allowed: [
          ".ay-site-footer__bar",
          ".ay-site-footer__grid",
          ".ay-site-footer__bottom"
        ]
      },
      {
        container: ".ay-site-footer__grid",
        allowed: [
          ".ay-site-footer__brand",
          ".ay-site-footer__about",
          ".ay-site-footer__topics",
          ".ay-site-footer__explore"
        ]
      }
    ];

    function normalizeText(value) {

      return String(value || "")
        .replace(/\s+/g, " ")
        .trim();

    }


    function isGarbageText(value) {

      var cleanValue = normalizeText(value);

      var onlyBackticks =
        cleanValue.length >= 3 &&
        cleanValue
          .split("")
          .every(function (character) {
            return character.charCodeAt(0) === 96;
          });


      return (
        onlyBackticks ||
        cleanValue === ":::" ||
        cleanValue.toLowerCase().indexOf(":::writing") === 0
      );

    }


    function isAllowed(element, selectors) {

      return selectors.some(function (selector) {
        return element.matches(selector);
      });

    }


    function findAllowedDescendants(element, selectors) {

      var result = [];


      selectors.forEach(function (selector) {

        element
          .querySelectorAll(selector)
          .forEach(function (item) {

            if (result.indexOf(item) === -1) {
              result.push(item);
            }

          });

      });


      return result;

    }


    function removeGarbageTextNodes(footer) {

      var walker = document.createTreeWalker(
        footer,
        NodeFilter.SHOW_TEXT,
        null
      );

      var textNodes = [];
      var node;


      while ((node = walker.nextNode())) {

        if (isGarbageText(node.nodeValue)) {
          textNodes.push(node);
        }

      }


      textNodes.forEach(function (textNode) {

        var parent = textNode.parentElement;

        textNode.remove();


        if (
          parent &&
          parent !== footer &&
          parent.children.length === 0 &&
          normalizeText(parent.textContent) === ""
        ) {
          parent.remove();
        }

      });

    }


    function cleanContainers(footer) {

      rules.forEach(function (rule) {

        footer
          .querySelectorAll(rule.container)
          .forEach(function (container) {

            Array
              .from(container.childNodes)
              .forEach(function (child) {

                if (child.nodeType === Node.TEXT_NODE) {

                  if (normalizeText(child.nodeValue) !== "") {
                    child.remove();
                  }

                  return;
                }


                if (child.nodeType === Node.COMMENT_NODE) {
                  return;
                }


                if (child.nodeType !== Node.ELEMENT_NODE) {
                  child.remove();
                  return;
                }


                if (isAllowed(child, rule.allowed)) {
                  return;
                }


                var allowedDescendants =
                  findAllowedDescendants(
                    child,
                    rule.allowed
                  );


                if (allowedDescendants.length > 0) {

                  allowedDescendants.forEach(
                    function (allowedChild) {

                      container.insertBefore(
                        allowedChild,
                        child
                      );

                    }
                  );

                }


                child.remove();

              });

          });

      });

    }


    function normalizeTildaRecord(footer) {

      var record = footer.closest(".t-rec");


      if (!record) {
        return;
      }


      record.style.margin = "0";
      record.style.padding = "0";
      record.style.backgroundColor = "#efefea";


      record
        .querySelectorAll(
          ".t-container, .t396__artboard"
        )
        .forEach(function (container) {

          container.style.maxWidth = "none";
          container.style.width = "100%";

        });

    }


    function renderUnifiedFooter(footer) {

      var platformMap = "ЛЮДИ / КУЛЬТУРА / ТЕХНОЛОГИИ";
      var platformCopy = "Art.Is.You — авторская исследовательская платформа о людях, культуре и технологиях.";
      var navigationColumn = '<nav aria-label="Навигация" class="ay-site-footer__topics ay-site-footer__navigation ay-site-footer__column"><a href="/research/"><span>Исследования</span></a><a href="/projects/"><span>Проекты</span></a><a href="/publications/"><span>Публикации</span></a></nav>';
      var profileColumn = '<section class="ay-site-footer__about ay-site-footer__profile ay-site-footer__column"><h2>Юлия Чернышева</h2><p>Креативный R&amp;D-директор.</p></section>';

      footer.innerHTML = `
        <div class="ay-site-footer__bar"><span>ART.IS.YOU / INDEPENDENT PLATFORM</span><span>${platformMap}</span></div>
        <div class="ay-site-footer__grid">
          <section class="ay-site-footer__brand"><a aria-label="Art.Is.You — главная страница" class="ay-site-footer__logo" href="/"><span>ART.</span><span>IS.</span><span>YOU</span></a><p class="ay-site-footer__platform-copy">${platformCopy}</p></section>
          ${profileColumn}${navigationColumn}
          <section class="ay-site-footer__explore ay-site-footer__contact ay-site-footer__column"><a class="ay-site-footer__contact-email" href="mailto:julchernysheva@gmail.com">julchernysheva@gmail.com</a><nav aria-label="Социальные сети" class="ay-site-footer__socials"><a aria-label="Facebook" href="https://www.facebook.com/Chernysheva.Julia" rel="noopener noreferrer" target="_blank">FB</a><a aria-label="Instagram" href="https://www.instagram.com/juliach.art/" rel="noopener noreferrer" target="_blank">IG</a><a aria-label="Telegram" href="https://t.me/backupmemory" rel="noopener noreferrer" target="_blank">TG</a><a aria-label="YouTube" href="https://www.youtube.com/channel/UCVGsMIYOqK5Ozo2AbgIgc6A?view_as=subscriber" rel="noopener noreferrer" target="_blank">YT</a><a aria-label="Авторский блог на Снобе" href="https://snob.ru/profile/412337/blog/" rel="noopener noreferrer" target="_blank">SNOB</a></nav></section>
        </div>
        <div class="ay-site-footer__bottom"><span>© <span class="ay-site-footer__year">2026</span> ART.IS.YOU</span></div>`;

    }


    function initializeFooter() {

      var footer =
        document.querySelector(footerSelector);


      if (!footer) {
        return;
      }


      renderUnifiedFooter(footer);
      removeGarbageTextNodes(footer);
      cleanContainers(footer);
      normalizeTildaRecord(footer);


      var year =
        footer.querySelector(
          ".ay-site-footer__year"
        );


      if (year) {
        year.textContent =
          String(new Date().getFullYear());
      }

    }


    if (document.readyState === "loading") {

      document.addEventListener(
        "DOMContentLoaded",
        initializeFooter
      );

    } else {

      initializeFooter();

    }


    window.setTimeout(initializeFooter, 100);
    window.setTimeout(initializeFooter, 500);
    window.setTimeout(initializeFooter, 1200);

  })();
