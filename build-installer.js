/*
 * @Date: 2023-10-07 22:01:53
 * @LastEditors: CZH
 * @LastEditTime: 2023-10-07 22:05:06
 * @FilePath: /electron-vite-vue/build-installer.js
 */
const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error);
        process.exit(1);
    });

function getInstallerConfig() {
    console.log('creating windows installer');
    const rootPath = path.join('./');
    const outPath = path.join(rootPath, 'release-builds');

    return Promise.resolve({
        appDirectory: path.join(outPath, 'photoManager/'),
        authors: 'My App Inc.',
        noMsi: true,
        outputDirectory: path.join(outPath, 'windows-installer'),
        exe: 'photoManager.exe',
        setupExe: 'photoManagerSetup.exe',
        setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
    });
}