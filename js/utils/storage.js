const STORAGE_KEY = "busDutyDays";

export function getDays() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Erreur lecture localStorage", error);
    return [];
  }
}

export function saveDays(days) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
}

export function deleteDays() {
  localStorage.removeItem(STORAGE_KEY);
}
