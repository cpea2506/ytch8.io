<svelte:head>
    <title>Sleepy PyPy</title>
    <link rel="shortcut icon" href="./TemplateData/favicon.ico" />
    <link rel="stylesheet" href="./TemplateData/style.css" />
</svelte:head>

<div id="unity-container" class="unity-desktop">
    <canvas id="unity-canvas" width="960" height="600" />
    <div id="unity-loading-bar">
        <div id="unity-logo" />
        <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full" />
        </div>
    </div>
    <div id="unity-warning" />
    <div id="unity-footer">
        <div id="unity-webgl-logo" />
        <div id="unity-fullscreen-button" />
        <div id="unity-build-title">Sleepy PyPy</div>
    </div>
</div>
