/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, Ja: Ja }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  interface Ja extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {
  "amOutsideAngularApp": "jestem_poza_aplikacją_angular",
  "amInsideAngularApp": "jestem_w_aplikacji_angular",
  "waitForElement": "czekam_na_element",
  "waitForClickable": "czekam_aż_będzie_klikalny",
  "waitForVisible": "czekam_aż_będzie_widoczny",
  "waitForText": "czekam_na_tekst",
  "moveTo": "przesuwam_do",
  "refresh": "odświeżam",
  "haveModule": "ma_moduł",
  "resetModule": "resetuję_moduł",
  "amOnPage": "jestem_na_stronie",
  "click": "klikam",
  "doubleClick": "podwójnie_klikam",
  "see": "widzę",
  "dontSee": "nie_widzę",
  "selectOption": "wybieram_opcję",
  "fillField": "wypełniam_pole",
  "pressKey": "naciskam_przycisk",
  "triggerMouseEvent": "wywołaj_wydarzenie_myszki",
  "attachFile": "załączam_plik",
  "seeInField": "widzę_w_polu",
  "dontSeeInField": "nie_widzę_w_polu",
  "appendField": "dostawiam_pole",
  "checkOption": "zaznaczam_opcję",
  "seeCheckboxIsChecked": "widzę_zaznaczony_checkbox",
  "dontSeeCheckboxIsChecked": "nie_widzę_zaznaczonego_checkboxu",
  "grabTextFrom": "pobieram_text_z",
  "grabValueFrom": "pobieram_wartość_z",
  "grabAttributeFrom": "pobieram_atrybut_z",
  "seeInTitle": "widzę_w_tytule",
  "dontSeeInTitle": "nie_widzę_w_tytule",
  "grabTitle": "pobieram_tytuł",
  "seeElement": "widzę_element",
  "dontSeeElement": "nie_widzę_elementu",
  "seeInSource": "widzę_w_źródle",
  "dontSeeInSource": "nie_widzę_w_źródle",
  "executeScript": "wykonuję_skrypt",
  "executeAsyncScript": "wykonuję_skrypt_asynchronicznie",
  "seeInCurrentUrl": "widzę_w_adresie_url",
  "dontSeeInCurrentUrl": "nie_widzę_w_adresie_url",
  "seeCurrentUrlEquals": "widzę_jednakowe_adresy_url",
  "dontSeeCurrentUrlEquals": "nie_widzę_jednakowych_adresów_url",
  "saveScreenshot": "zapisuję_zrzut_ekranu",
  "setCookie": "ustawiam_cookie",
  "clearCookie": "usuwam_cookie",
  "seeCookie": "widzę_cookie",
  "dontSeeCookie": "nie_widzę_cookie",
  "grabCookie": "pobieram_cookie",
  "resizeWindow": "zmieniam_wielkość_okna",
  "wait": "czekam",
  "haveHeader": "mam_nagłówek",
  "clearField": "czyszczę_pole",
  "dontSeeElementInDOM": "nie_widzę_elementu_w_drzewie_DOM",
  "moveCursorTo": "przesuwam_kursor_do",
  "scrollTo": "skroluję_do"
}
  }
}
