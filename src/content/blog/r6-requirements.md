---
title: "R6 cheat system requirements: HVCI, Core Isolation, TPM and Secure Boot"
description: "Before you buy, check these four Windows settings. Here's how to verify HVCI, Core Isolation, TPM and Secure Boot on Windows 10 and 11."
category: Setup
publishDate: 2026-10-20
updatedDate: 2026-10-20
featuredImage: /images/gameplay/frames/r6-frame-10.png
imageAlt: "Windows Core Isolation and Secure Boot settings"
relatedSlugs: ["buy-r6-cheats", "r6-loader-fix", "r6-patch-day"]
faq:
  - q: "Which Windows versions work?"
    a: "Both Windows 10 and Windows 11 are supported."
  - q: "Does it work on both Intel and AMD?"
    a: "Yes."
---

Most failed first launches come down to one thing: a Windows security setting that isn't on. The requirements are simple, but you should confirm them before buying.

## The checklist

- Windows 10 or Windows 11
- Intel or AMD CPU
- PC version of Rainbow Six Siege
- **HVCI: On**
- **Core Isolation: On**
- **TPM: On**
- **Secure Boot: On**

## How to check each one

**Core Isolation and HVCI (memory integrity).** Open Windows Security, go to Device security, then Core isolation details. Turn on Memory integrity. Restart if Windows asks.

**TPM.** Press Windows + R, type tpm.msc and press Enter. You should see "The TPM is ready for use." If you see "Compatible TPM cannot be found," look in your BIOS for an option called fTPM (AMD) or PTT (Intel).

**Secure Boot.** Press Windows + R, type msinfo32 and press Enter. Look for "Secure Boot State." It should say On. If it says Off, enable it in your BIOS. If it says Unsupported, your system may not be compatible.

## If memory integrity won't turn on

Windows usually lists the driver that's blocking it. Update that driver or remove the old software it belongs to, then try again. Older hardware utilities are a common cause.

## After you've checked everything

Install the loader, run it as administrator, start Rainbow Six Siege, and press INSERT to open the menu.

If anything still fails, see the [loader troubleshooting guide](/cheats/r6-loader-fix/) or open a ticket on the [support page](/support/).

## Meet the requirements? Get started

[Get R6 now](/products/rainbow-six-cheats/)
