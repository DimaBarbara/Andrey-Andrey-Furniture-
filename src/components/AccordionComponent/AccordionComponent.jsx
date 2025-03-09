import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import s from "./AccordionComponent.module.css";

const AccordionComponent = () => {
  return (
    <Accordion allowZeroExpanded className={s.accordion}>
      <AccordionItem className={s.accordionItem}>
        <AccordionItemHeading className={s.accordionItemHeading}>
          <AccordionItemButton className={s.accordionButton}>
            Наша місія
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={s.accordionItemPanel}>
          Ми прагнемо, щоб кожен наш виріб став не просто частиною інтер'єру, а
          справжнім елементом комфорту та затишку у вашому житті. Для нас
          важливо, щоб меблі були не тільки красивими, але й функціональними,
          надійними та екологічними.
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className={s.accordionItem}>
        <AccordionItemHeading className={s.accordionItemHeading}>
          <AccordionItemButton className={s.accordionButton}>
            Чому ми?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={s.accordionItemPanel}>
          <ul className={s.ulAcc}>
            <li className={s.liAcc}>
              Більше 10 років досвіду: за цей час ми вдосконалили процеси
              виробництва та створили сотні дизайнерських меблів, що
              користуються попитом серед наших клієнтів.
            </li>
            <li className={s.liAcc}>
              Індивідуальний підхід: ми розуміємо, що кожен клієнт унікальний,
              тому пропонуємо не тільки стандартні рішення, але й індивідуальний
              дизайн для кожного замовлення.
            </li>
            <li className={s.liAcc}>
              Висока якість: використовуємо тільки найкращі матеріали та
              обладнання, щоб наші меблі служили вам довго і не втрачали свій
              вигляд.
            </li>
            <li className={s.liAcc}>
              Сучасний дизайн: наші меблі поєднують в собі функціональність та
              естетику, що дозволяє створювати стильні та комфортні інтер'єри
              для будь-якого дому чи офісу.
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className={s.accordionItem}>
        <AccordionItemHeading className={s.accordionItemHeading}>
          <AccordionItemButton className={s.accordionButton}>
            Наші послуги
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={s.accordionItemPanel}>
          <ul className={s.ulAcc}>
            <li className={s.liAcc}>
              Проектування інтер'єрів: ми допоможемо вам спланувати простір і
              підібрати ідеальні меблі для будь-якого інтер'єру.
            </li>
            <li className={s.liAcc}>
              Індивідуальне виготовлення меблів: якщо вам потрібен особливий
              стиль або функціональність, ми створимо меблі на замовлення, що
              повністю відповідатимуть вашим вимогам.
            </li>
            <li className={s.liAcc}>
              Консультації та дизайн: наші спеціалісти нададуть консультації з
              вибору матеріалів, кольорів та конструкцій для вашого інтер'єру.
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className={s.accordionItem}>
        <AccordionItemHeading className={s.accordionItemHeading}>
          <AccordionItemButton className={s.accordionButton}>
            Як ми працюємо
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={s.accordionItemPanel}>
          <ul className={s.ulAcc}>
            <li className={s.liAcc}>
              Консультація та оцінка потреб: ми починаємо з обговорення ваших
              побажань, побудови концепції та створення проекту.
            </li>
            <li className={s.liAcc}>
              Дизайн та виготовлення: після узгодження проекту ми переходимо до
              виготовлення меблів за високими стандартами якості.
            </li>
            <li className={s.liAcc}>
              Доставка та встановлення: ми здійснюємо доставку та професійну
              установку меблів у вашому домі або офісі.
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
