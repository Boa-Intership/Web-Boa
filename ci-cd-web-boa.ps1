# Configuración
$projectPath = "C:\Proyects\Web-Boa"
cd $projectPath

# Detectar la rama actual
$branch = git rev-parse --abbrev-ref HEAD

# Determinar carpeta de despliegue según rama
switch ($branch) {
    "main"    { $targetPath = "C:\inetpub\wwwroot\web_boa" }
    "develop" { $targetPath = "C:\inetpub\wwwroot\web_boa_dev" }
    default {
        Write-Host "ERROR: La rama '$branch' no está configurada para despliegue."
        exit 1
    }
}

Write-Host "`nIniciando CI/CD para rama: '$branch'"
Write-Host "Ruta de despliegue: $targetPath"

# Obtener cambios del remoto
git fetch origin $branch

$localHash  = git rev-parse HEAD
$remoteHash = git rev-parse origin/$branch

if ($true) {
    Write-Host "`nCambios detectados. Actualizando..."
    git pull origin $branch

    Write-Host "Instalando dependencias..."
    npm install

    Write-Host "Compilando proyecto..."
    npm run build

    Write-Host "Limpiando carpeta de IIS..."
    Remove-Item "$targetPath\*" -Recurse -Force -ErrorAction SilentlyContinue

    Write-Host "Copiando archivos compilados..."
    Copy-Item "$projectPath\dist\*" -Destination $targetPath -Recurse

    Write-Host "`nDespliegue completado exitosamente en: $targetPath"
} else {
    Write-Host "`nNo hay cambios nuevos en '$branch'."
}
