# IntegrityFiles

Generate file with sha-1 of all files from folder

## Install
1. Clone/Download this repository
2. 'npm install -g IntegrityFiles'

## Usage
```
$ IntegrityFiles [Folder]
```

## Output

File: IntegrityFile.txt

Content: (Example from command 'IntegrityFiles IntegrityFiles\')

```

{

"IntegrityFiles\\.gitignore": "2e8652eb855d5adccdb9e2deb453e74a063781f1",

"IntegrityFiles\\IntegrityFiles.js": "6a90a08b55bf2b71d718db7c86c0739a233a940a",

"IntegrityFiles\\README.md": "100f2c3eb8108d0022df1344dd538f0e7400c6c9",

"IntegrityFiles\\lib\\Utils.js": "c6a472bdc4495efa753560a53a8d6c8214cf33a1",

"IntegrityFiles\\package.json": "f970ac0682499a1ccd4c54865d8e8ca24e8f7aa2"
}

```