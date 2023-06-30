# Set the folder path
$folderPath = "C:\Users\abmou\Documents\GitHub\Edukids\src"

# Set the old and new text to replace
$oldText = "Flexwijs"
$newText = "edukids"

# Get all JavaScript files within the folder path
$jsFiles = Get-ChildItem -Path $folderPath -Filter "*.js" -File -Recurse

# Get all CSS files within the folder path
$cssFiles = Get-ChildItem -Path $folderPath -Filter "*.css" -File -Recurse
$htmlFiles = Get-ChildItem -Path $folderPath -Filter "*.html" -File -Recurse

# Combine JavaScript and CSS files into a single array
$files = $jsFiles + $cssFiles + $htmlFiles

# Iterate through each file and replace the text
foreach ($file in $files) {
    # Read the file content
    $content = Get-Content -Path $file.FullName

    # Replace the old text with the new text
    $updatedContent = $content -replace $oldText, $newText

    # Overwrite the file with the updated content
    $updatedContent | Set-Content -Path $file.FullName
}
