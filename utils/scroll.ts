"use client";

export function scrollToForm() {
  if (typeof window === "undefined") return;
  const formContainer = document.getElementById("contact-form");
  if (formContainer) {
    formContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const nameInput = formContainer.querySelector('input[type="text"]') as HTMLInputElement | null;
      nameInput?.focus();
    }, 800);
  }
}

export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
