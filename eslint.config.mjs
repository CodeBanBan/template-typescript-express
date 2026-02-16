// eslint.config.mjs
import neostandard from 'neostandard'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...neostandard({
    // เปิดโหมด TypeScript (จะอ่านไฟล์ tsconfig.json อัตโนมัติถ้ามี)
    ts: true,

    // (Optional) ถ้าโปรเจกต์เป็น Frontend Framework ให้เปิด option ตามที่ใช้
    // react: true,
    // vue: true,
  }),

  // ตั้งค่า Global variables สำหรับ Mocha (แทน env: { mocha: true })
  {
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  },

  // กำหนดโฟลเดอร์ที่ต้องการข้าม (Ignores)
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'build'
    ]
  },

  // (Optional) ถ้าต้องการแก้กฎบางข้อทับ StandardJS
  {
    rules: {
      // เช่น อยากให้ใส่ semicolon ได้ (ปกติ Standard ห้าม)
      // "@stylistic/semi": ["error", "always"]
      'object-shorthand': 'off'
    }
  }
];