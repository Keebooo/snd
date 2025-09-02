export interface Translations {
  siteTitle: string;
  siteSubtitle: string;
  todaysRole: string;
  roleHistory: string;
  upcomingSchedule: string;
  tomorrow: string;
  allRoles: string;
  role: string;
  resetsDaily: string;
  roleRotation: string;
  builtBy: string;
  currentTime: string;
}

export const translations: Record<string, Translations> = {
  en: {
    siteTitle: "Soundness.xyz",
    siteSubtitle: "Role Rotation Monitor",
    todaysRole: "Today's Role",
    roleHistory: "Role History",
    upcomingSchedule: "Upcoming Schedule",
    tomorrow: "Tomorrow",
    allRoles: "All Roles",
    role: "Role",
    resetsDaily: "Resets daily at 5 PM UTC",
    roleRotation: "Role rotation:",
    builtBy: "Built by",
    currentTime: "Current Time"
  },
  id: {
    siteTitle: "Soundness.xyz",
    siteSubtitle: "Monitor Rotasi Role",
    todaysRole: "Role Hari Ini",
    roleHistory: "Riwayat Role",
    upcomingSchedule: "Jadwal Mendatang",
    tomorrow: "Besok",
    allRoles: "Semua Role",
    role: "Role",
    resetsDaily: "Reset otomatis setiap hari jam 5 sore UTC",
    roleRotation: "Rotasi role:",
    builtBy: "Dibuat oleh",
    currentTime: "Waktu Sekarang"
  }
};

export type Language = 'en' | 'id';