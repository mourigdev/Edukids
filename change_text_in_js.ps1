# Set the folder path
$folderPath = "C:\Users\abmou\Desktop\PROJECTS\edukids\src"

# Set the old and new text to replace
$oldText = "Flexwig"
$newText = "Edukids"

# Get all JavaScript files within the folder path
$jsFiles = Get-ChildItem -Path $folderPath -Filter "*.js" -File -Recurse

# Get all CSS files within the folder path
$cssFiles = Get-ChildItem -Path $folderPath -Filter "*.css" -File -Recurse

# Combine JavaScript and CSS files into a single array
$files = $jsFiles + $cssFiles

# Iterate through each file and replace the text
foreach ($file in $files) {
    # Read the file content
    $content = Get-Content -Path $file.FullName

    # Replace the old text with the new text
    $updatedContent = $content -replace $oldText, $newText

    # Overwrite the file with the updated content
    $updatedContent | Set-Content -Path $file.FullName
}
