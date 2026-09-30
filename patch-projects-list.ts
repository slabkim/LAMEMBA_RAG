import fs from 'fs';

const file = 'frontend/src/pages/ProjectsList/index.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/const res = await fetchAPI\('\/projects'\);[\s\S]*?setProjects\(res\.data\);/, 
`const [res, instRes] = await Promise.all([fetchAPI('/projects'), fetchAPI('/instruments')]);
      setProjects(res.data);
      if (instRes.data) {
        const versions = instRes.data.flatMap((std: any) => std.versions);
        setInstrumentVersions(versions);
        if (versions.length > 0) setSelectedVersion(versions[0].id);
      }`);

fs.writeFileSync(file, code);
console.log("Patched!");
