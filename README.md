# DESIGN-PATTERN-JS

[`DESIGN-PATTERN`](..) loyihasidagi Java misollarining JavaScript (ES modules, Node.js 18+) versiyasi. Asl Java kodi o'zgartirilmagan; papka tuzilishi va nomlari saqlangan.

Avval [umumiy qo'llanma](00-GENERAL-GUIDE/README.md)ni o'qing.

| Mavzu | Papka |
| --- | --- |
| Builder — PC Classwork | [creational/builder/Classwork](creational/builder/Classwork/README.md) |
| Builder — HTTP request | [creational/builder/Http request](<creational/builder/Http request/README.md>) |
| Factory | [creational/factory](creational/factory/README.md) |
| Singleton | [creational/singleton](creational/singleton/README.md) |

Hammasini birdan tekshirish (hech qanday o'rnatish kerak emas):

```bash
for d in creational/builder/Classwork "creational/builder/Http request" creational/singleton; do node "$d/src/check.js"; done
node creational/factory/src/Main.js
```
