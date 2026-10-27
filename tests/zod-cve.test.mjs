import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// GHSA-mrhx-c7xc-m3w5 (CVE-2023-54404): zod < 4.6.6 allows attackers to
// exhaust memory by submitting large arrays to array schemas without length
// constraints. The first patched version is 4.6.6.
// This test guards that the repository's locked zod is fixed.
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const lockfile = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'))

test('locked zod is >= 4.6.6 (first patched version for GHSA-mrhx-c7xc-m3w5)', () => {
  const zod = lockfile.packages['node_modules/zod']
  assert.ok(zod, 'expected a node_modules/zod entry in package-lock.json')

  const [major, minor, patch] = zod.version.split('.').map(Number)
  const patched = major > 4 || (major === 4 && (minor > 6 || (minor === 6 && patch >= 6)))
  assert.ok(patched, `expected zod >= 4.6.6, found ${zod.version}`)
})
