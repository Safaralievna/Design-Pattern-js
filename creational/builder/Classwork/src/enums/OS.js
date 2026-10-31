// Java: public enum OS { WINDOWS, MACOS, LINUX }
// JavaScript'da enum yo'q. Object.freeze() bilan o'zgartirib bo'lmaydigan
// "nom -> qiymat" obyekti yasaymiz. Qiymat sifatida nomning o'zini (string) olamiz,
// shunda console.log(OS.MACOS) Java'dagi kabi "MACOS" ni beradi.
export const OS = Object.freeze({
  WINDOWS: "WINDOWS",
  MACOS: "MACOS",
  LINUX: "LINUX",
});
