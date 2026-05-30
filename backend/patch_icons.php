<?php

require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Service;

$icons = [
    'India Market' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-[42px] h-[42px] text-[#F57C00] group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M10 21v-4a2 2 0 014 0v4" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h.01 M12 7h.01 M15 7h.01 M9 11h.01 M12 11h.01 M15 11h.01 M9 15h.01 M12 15h.01 M15 15h.01" stroke-width="3" /></svg>',
    
    'International Tax' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-[42px] h-[42px] text-[#F57C00] group-hover:-rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>',
    
    'Transfer Pricing' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-[42px] h-[42px] text-[#F57C00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>',
    
    'FEMA' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px] text-[#F57C00] group-hover:scale-110 transition-transform duration-300 transform -translate-x-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>',
    
    'Transaction Advisory' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-[42px] h-[42px] text-[#F57C00] group-hover:-rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    
    'Litigation' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-[44px] h-[44px] text-[#F57C00] group-hover:-rotate-[10deg] transition-transform duration-300 origin-bottom" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>'
];

$services = Service::all();
foreach ($services as $service) {
    echo "Processing: {$service->title}\n";
    if (str_contains($service->title, 'Litigation') || str_contains($service->title, 'Dispute') || str_contains($service->title, 'litigation') || str_contains($service->title, 'dispute') || str_contains($service->title, 'Litigation & Dispute Resolution') || str_contains($service->title, 'visory')) {
        // Just update it if it match either
    }
}

// Better yet, let's match exact arrays based on index to ensure we don't skip it.
$allServices = Service::orderBy('id', 'asc')->get();
$iconValues = array_values($icons);
foreach ($allServices as $index => $service) {
    if (isset($iconValues[$index])) {
        $service->icon = $iconValues[$index];
        $service->save();
        echo "Updated icon for slot {$index}: {$service->title}\n";
    }
}
echo "Done.\n";
