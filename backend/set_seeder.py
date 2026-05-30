<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Blog;
use App\Models\TeamMember;
use App\Models\Testimonial;
use App\Models\ClientLogo;
use App\Models\Career;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Services
        $services = [
            [
                'title' => 'Auditing & Assurance',
                'slug' => 'auditing-and-assurance',
                'description' => 'Comprehensive statutory, internal, and forensic audits ensuring compliance, transparency, and stakeholder confidence.',
                'icon' => 'ClipboardList'
            ],
            [
                'title' => 'Taxation & Compliance',
                'slug' => 'taxation-and-compliance',
                'description' => 'Strategic tax planning, GST compliance, ITR filing, and regulatory advisory to minimize risk and optimize financial efficiency.',
                'icon' => 'Calculator'
            ],
            [
                'title' => 'FEMA & NRI Advisory',
                'slug' => 'fema-and-nri-advisory',
                'description' => 'Expert advisory on cross-border transactions, FEMA regulations, repatriation, and NRI taxation.',
                'icon' => 'Globe'
            ],
            [
                'title' => 'Business Setup',
                'slug' => 'business-setup',
                'description' => 'End-to-end company incorporation, regulatory registrations, and compliance structuring for startups and enterprises.',
                'icon' => 'Building'
            ],
            [
                'title' => 'Management Consulting',
                'slug' => 'management-consulting',
                'description' => 'Data-driven financial strategy, operational efficiency consulting, and business growth advisory.',
                'icon' => 'TrendingUp'
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }

        // Testimonials
        $testimonials = [
            [
                'name' => 'Rajesh Sharma',
                'designation' => 'CEO',
                'company' => 'Tech Innovations Group',
                'message' => 'PUMEC has been our strategic partner for over a decade. Their expertise in international taxation and compliance has been invaluable to our global expansion.',
                'rating' => 5
            ],
            [
                'name' => 'Priya Desai',
                'designation' => 'Finance Director',
                'company' => 'Stellar Logistics',
                'message' => 'The proactive advisory strictly aligned with evolving GST regulations saved us significantly in potential liabilities, whilst ensuring smooth financial workflows.',
                'rating' => 5
            ],
            [
                'name' => 'Vikram Malhotra',
                'designation' => 'Founder',
                'company' => 'Ascend Ventures',
                'message' => 'From initial business setup to complex regulatory structuring, the team provided exceptional foresight and guidance that let us focus purely on growth.',
                'rating' => 5
            ]
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }

        // Team
        $team = [
            [
                'name' => 'Anil Verma',
                'role' => 'Managing Partner',
                'bio' => 'With 25 years of experience in corporate taxation and structuring, Anil leads the firm\'s strategic advisory division.',
                'image' => '/images/team-anil.jpg'
            ],
            [
                'name' => 'Sneha Kapoor',
                'role' => 'CFO Advisory Lead',
                'bio' => 'Sneha specializes in financial consulting, operational restructuring, and helping businesses optimize their profitability.',
                'image' => '/images/team-sneha.jpg'
            ],
            [
                'name' => 'Arun Mehta',
                'role' => 'Indirect Tax Specialist',
                'bio' => 'An authority on GST and compliance, Arun ensures clients navigate regulatory landscapes with absolute precision and ease.',
                'image' => '/images/team-arun.jpg'
            ]
        ];

        foreach ($team as $member) {
            TeamMember::create($member);
        }

        // Blogs
        $blogs = [
            [
                'title' => 'Understanding GST Changes in 2024',
                'slug' => 'understanding-gst-changes-in-2024',
                'content' => 'The evolving landscape of the Goods and Services Tax requires businesses to constantly adapt. In 2024, significant amendments were introduced that aim to streamline filing while increasing scrutiny against evasion. This article delves into the new invoicing protocols, revised tax slabs for specific sectors, and strategic approaches companies can take to remain compliant without disrupting cash flow operations. Staying ahead of these regulations is no longer optional; it is a vital component of sustainable corporate governance.',
                'excerpt' => 'A comprehensive review of the latest GST amendments and how businesses can maintain compliance efficiently.',
                'category' => 'Taxation',
                'image' => '/images/blog-gst.jpg'
            ],
            [
                'title' => 'Strategic Tax Planning for Startups',
                'slug' => 'strategic-tax-planning-for-startups',
                'content' => 'Startups frequently overlook tax planning during their initial growth phases, leading to preventable fiscal drag later on. Structuring equity correctly, utilizing government exemptions, and managing deferred taxes require a strategic approach from day one. By proactively aligning tax strategy with business models, founders can maximize operational capital and attract investors who value stringent financial hygiene. This guide covers essential steps every early-stage company should implement.',
                'excerpt' => 'Why early-stage companies must integrate tax strategies to optimize working capital and attract investment.',
                'category' => 'Business Advisory',
                'image' => '/images/blog-startup.jpg'
            ],
            [
                'title' => 'Global Compliance Challenges for Indian Businesses',
                'slug' => 'global-compliance-challenges-for-indian-businesses',
                'content' => 'As Indian enterprises expand across borders, they encounter complex international regulatory frameworks. Navigating foreign exchange management, disparate corporate governance standards, and cross-border taxation protocols demands sophisticated structuring. Failing to comprehend these nuances can result in severe financial penalties and operational roadblocks. This article analyzes the primary friction points and offers methodologies for establishing robust global compliance mechanisms.',
                'excerpt' => 'An analysis of cross-border regulatory hurdles and methodologies for ensuring seamless international expansion.',
                'category' => 'FEMA & Global',
                'image' => '/images/blog-global.jpg'
            ]
        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }

        // Clients
        $clients = [
            ['name' => 'Infosys', 'logo_url' => '/logos/infosys.png'],
            ['name' => 'Tata Group', 'logo_url' => '/logos/tata.png'],
            ['name' => 'Wipro', 'logo_url' => '/logos/wipro.png'],
            ['name' => 'HDFC Bank', 'logo_url' => '/logos/hdfc.png'],
            ['name' => 'Aditya Birla', 'logo_url' => '/logos/aditya-birla.png']
        ];

        foreach ($clients as $client) {
            ClientLogo::create($client);
        }
        
    }
}