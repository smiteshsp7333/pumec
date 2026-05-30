<?php
$files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('app/Filament/Resources'));
foreach ($files as $file) {
    if (!$file->isFile() || $file->getExtension() !== 'php') continue;
    
    $path = $file->getPathname();
    $content = file_get_contents($path);
    if (empty($content)) continue;
    
    $updated = $content;
    
    // Fix navigation properties
    $updated = str_replace('protected static ?string $navigationIcon', 'protected static string|\BackedEnum|null $navigationIcon', $updated);
    $updated = str_replace('protected static ?string $navigationGroup', 'protected static string|\BackedEnum|null $navigationGroup', $updated);
    
    // Fix Actions namespace
    $updated = preg_replace('/Tables\\\\Actions\\\\([a-zA-Z]+Action|BulkActionGroup)/', 'Filament\Actions\\\$1', $updated);
    
    // Fix action arrays
    $updated = str_replace('->actions([', '->recordActions([', $updated);
    $updated = str_replace('->bulkActions([', '->toolbarActions([', $updated);
    
    if ($content !== $updated) {
        file_put_contents($path, $updated);
        echo "Updated $path\n";
    }
}
echo "Done.\n";
