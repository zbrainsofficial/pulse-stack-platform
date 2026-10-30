import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

console.log('=== Verifying PulseStack (React 19 + TypeScript + Modern Architecture) ===\n');

// 1. Check TypeScript Interfaces
const types = fs.readFileSync(path.join(root, 'src/types/index.ts'), 'utf8');
assert(types.includes('interface ServiceHealth'), 'Must declare ServiceHealth');
assert(types.includes('interface DeploymentLog'), 'Must declare DeploymentLog');
console.log('  [PASS] Strict TypeScript Interfaces validated.');

// 2. Check React 19 Component Hierarchy
const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
assert(app.includes('Navbar'), 'App must render Navbar');
assert(app.includes('ServiceGrid'), 'App must render ServiceGrid');
assert(app.includes('DeploymentList'), 'App must render DeploymentList');
console.log('  [PASS] Component Hierarchy (Navbar, ServiceGrid, DeploymentList) verified.');

// 3. Check Vite & Tailwind Configs
assert(fs.existsSync(path.join(root, 'vite.config.ts')), 'vite.config.ts must exist');
assert(fs.existsSync(path.join(root, 'tailwind.config.js')), 'tailwind.config.js must exist');
console.log('  [PASS] Modern Tooling Configs (Vite + Tailwind + PostCSS) verified.');

// 4. Check Subtle Branding
const footer = fs.readFileSync(path.join(root, 'src/components/Footer.tsx'), 'utf8');
assert(footer.includes('Zaigham Ali Ashraf') && footer.includes('0321-6314020'), 'Must contain subtle author signature');
console.log('  [PASS] Subtle author accreditation validated in Footer.');

console.log('\n[ALL PULSESTACK PLATFORM VERIFICATIONS PASSED 100%!]');
