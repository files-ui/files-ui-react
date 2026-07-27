// Keep in sync with Turbopack's experimental React switch: file://./../../../../crates/next-core/src/next_import_map.rs
export function needsExperimentalReact(config) {
    const { taint } = config.experimental || {};
    return Boolean(taint);
}

//# sourceMappingURL=needs-experimental-react.js.map