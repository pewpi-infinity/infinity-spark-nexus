# Planning Guide

Infinity Spark turns ideas into live websites with working tools instantly. Every website is a token. Every tool adds value. Tokens are tradable assets in a real marketplace.

**Experience Qualities**:
1. **Immediate Functionality** - No descriptive text as primary output; every query generates working, interactive tools that render on first load
2. **Tool-First Architecture** - Websites are collections of functional components (video players, charts, galleries, calculators) not just content
3. **Value Per Function** - Each tool increases website value; tokens represent real, functional digital infrastructure

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a world-building platform where user intent is classified into tool primitives that are instantly instantiated as working components. The system includes: intelligent tool classification, real-time component rendering, token minting per functionality, wallet management, marketplace trading, and collaborative building. The differentiation is not AI writing but instant ownership of working digital infrastructure.

## Essential Features

### 1. Tool Classification & Instant Rendering (Core Execution Engine)
- **Functionality**: Analyzes user intent and immediately generates 1-3 working tool primitives (video player, chart, gallery, timeline, dashboard, store, calculator, etc.)
- **Purpose**: Transform abstract queries into functional components on first load — no placeholders, no "coming soon" text
- **Trigger**: User submits any search query
- **Progression**: Parse query → Classify into tool types → Generate tool configs → Mount working components → Display live website
- **Success criteria**: Tools are interactive on first render, each tool type has distinct functionality, user sees working components within 3 seconds

### 2. Token-Per-Tool Minting (Value Generation)
- **Functionality**: Mints tokens based on functional components added, not text content; each tool type has specific value
- **Purpose**: Make functionality tradable — websites are collections of working tools with measurable value
- **Trigger**: Automatically when website created (base + tools) and when pages added (new tools)
- **Progression**: Tool rendered → Value calculated → Token metadata updated → Wallet balance increased → Tool count displayed
- **Success criteria**: Token metadata includes tool count, website value reflects sum of tool values, each tool addition increases token value

### 3. Infinity Search Bar (Intent-to-Tool Engine)
- **Functionality**: Single input field that accepts any idea and generates working website with functional tools
- **Purpose**: Primary interface for instant creation — simplicity meets immediate execution
- **Trigger**: User types and presses Enter or clicks the Infinity symbol
- **Progression**: Type query → Tool classification happens → Website generates with mounted tools → Token mints → Redirect to live site
- **Success criteria**: At least 1 working tool appears on every generated website, no "this will include" descriptions as primary output

### 4. Instant Website Generation with Functional Tools
- **Functionality**: Creates live website with working components based on intent: charts for data queries, galleries for visual content, calculators for computations, stores for commerce, etc.
- **Purpose**: Deliver real functionality immediately, not descriptions of future functionality
- **Trigger**: Automatically triggered after Infinity search submission
- **Progression**: Classify intent → Select tool primitives → Generate tool configs → Render components → Display with metadata (value, token ID, owner, tool count)
- **Success criteria**: Every website includes at least one interactive tool, tools are fully functional without additional setup, tool types match user intent

### 5. Tool Primitive Library (Functional Components)
- **Functionality**: 20+ pre-built interactive components: video player, charts (bar/line/pie), gallery, timeline, dashboard, store, calculator, forms, tables, feeds, calendars, etc.
- **Purpose**: Provide real functionality that users can immediately interact with and trade
- **Trigger**: Automatically selected based on intent classification
- **Progression**: Tool type determined → Config generated → Component rendered → Interactivity enabled
- **Success criteria**: Each tool renders correctly, has unique functionality, responds to user interaction, displays relevant data/UI

### 6. Automatic Wallet & Token System
- **Functionality**: Creates wallet on first use, mints tokens per website with metadata including tool count, displays balance reflecting functional value
- **Purpose**: Make every website a tradable asset with provable functionality and measurable value
- **Trigger**: Automatically on first website creation (wallet), automatically on each new website/tool (token updates)
- **Progression**: Detect first use → Create wallet → Mint token with tool metadata → Calculate value from tool types → Update balance → Show in wallet view
- **Success criteria**: Wallet shows correct balance, tokens link to websites, metadata includes tool count and types, value reflects functional components

### 7. Live Page Builder (Continuous Tool Addition)
- **Functionality**: Visible-by-default builder that adds new pages with new functional tools, expanding website capabilities
- **Purpose**: Enable continuous growth with each addition bringing new tools and increased value
- **Trigger**: Visible on every user-owned site by default, can be toggled
- **Progression**: Site loads → Builder visible → User searches → New tools classified → Tools rendered → Page added → Token value increases → Builder remains available
- **Success criteria**: Each new page includes appropriate tools for query, tools are immediately functional, value increases reflect new tools

### 8. Marketplace (Functional Asset Trading)
- **Functionality**: Browse, buy, sell website-tokens that include working tools and functional infrastructure
- **Purpose**: Create real economy around functional digital assets, not just content
- **Trigger**: User clicks Marketplace from main nav or wallet
- **Progression**: Enter marketplace → Browse listings with tool counts → Preview working tools → Buy website with ∞ → Ownership + all tools transfer → Wallet updates → Seller receives payment
- **Success criteria**: Listings show tool count, buyers receive functional websites, all tools remain operational after transfer

### 9. Website Themes & Templates
- **Functionality**: Choose from 5 distinct themes (Cosmic, Minimal, Editorial, Technical, Vibrant) when creating websites
- **Purpose**: Give users visual control and creative expression over their generated websites
- **Trigger**: Theme selector displayed on home screen before creation
- **Progression**: View theme options with previews → Select preferred theme → Enter search query → Website generates with chosen theme applied
- **Success criteria**: All themes render correctly, theme persists across pages and tools, themes are visually distinct and polished

### 10. Collaboration System
- **Functionality**: Website owners can add collaborators with specific roles (Editor or Viewer), manage permissions, and allow multiple users to contribute
- **Purpose**: Enable team-based website building and shared ownership experiences
- **Trigger**: Owner clicks "Add Collaborator" button in website view
- **Progression**: Enter collaborator wallet address → Select role (Editor/Viewer) → Add collaborator → Collaborator appears in list → Owner can remove collaborators → Editors can add pages
- **Success criteria**: Collaborators can access websites per their role, tool additions are attributed, owner maintains control, collaboration list displays correctly

### 11. List & Sell Websites
- **Functionality**: Website owners can list their sites for sale at a custom price in ∞, unlist anytime, and complete purchases instantly
- **Purpose**: Enable fluid marketplace economy with user-controlled pricing
- **Trigger**: Owner clicks "List for Sale" in website view
- **Progression**: Enter price in ∞ → Confirm listing → Website appears in marketplace "For Sale" tab → Buyer purchases → ∞ deducted from buyer → Website ownership transfers → Token moves to buyer wallet
- **Success criteria**: Listings appear immediately, prices are enforced, ∞ balance checks prevent overdraft, ownership + tools transfer atomically

### 12. Guest-First, Auth-When-Needed
- **Functionality**: Spark initializes fully as guest, login only required for editing/trading, site owners can enable their own auth
- **Purpose**: Remove friction, never block exploration or viewing
- **Trigger**: Guest access on load, login prompt only when attempting owner actions
- **Progression**: Load app → Full guest access → Attempt edit/trade → Login prompt → Authenticate → Owner actions unlocked
- **Success criteria**: No auth screens on initialization, all viewing works as guest, edit/trade properly gated

## Edge Case Handling

- **Empty Search Query**: Prevent submission, show gentle prompt like "What world will you build?"
- **Ambiguous Intent**: Default to content-hub tool with explanation, allow user to refine
- **Tool Classification Failure**: Fall back to content-hub tool, log error, still render functional website
- **Duplicate Ideas**: Generate unique variations, append timestamp to token ID, ensure no collision
- **Network Failure During Generation**: Show retry option, preserve user's query and partial tool list, resume from last checkpoint
- **Tool Rendering Error**: Show error boundary per tool, other tools continue to function, offer reload
- **Wallet Not Found**: Auto-create on any action requiring it, seamless and invisible, start with 10,000 ∞ balance
- **Insufficient ∞ Balance**: Show clear error when attempting purchase, display current balance vs required price
- **Builder Accidentally Hidden**: Show subtle "Show Builder" button in header, persist preference
- **Marketplace Empty State**: Show inspirational call-to-action, suggest creating first website, tab between "For Sale" and "Browse All"
- **Token Transfer Failure**: Roll back transaction, show clear error, preserve token ownership, refund ∞
- **Deleted Files/Repos**: Detect deletion, auto-rebuild from intent + history, never break user access
- **Invalid Collaborator Wallet**: Validate wallet format, prevent duplicate collaborators, show clear error messages
- **Non-Owner Trying to List**: Prevent listing by non-owners, show "Owner only" message
- **Listing Already Listed Site**: Prevent re-listing, show current listing with option to update price
- **Invalid Sale Price**: Require positive numbers, prevent zero or negative prices, show validation error
- **Tool Config Missing**: Use sensible defaults for each tool type, still render functional component
- **Multiple Tools Same Type**: Allow duplicates, render each with unique ID, differentiate by config

## Design Direction

The design should evoke **functional immediacy meeting digital ownership** - every element you see is working, tradable, and valuable. The interface should feel like opening a toolbox of infinite possibilities, where complexity is hidden behind working components. Think: the instant gratification of a well-built dashboard combined with the tangible value of owning functioning infrastructure.

## Color Selection

A deep cosmic theme with vibrant accent colors that pop against darkness, creating contrast and energy.

- **Primary Color**: Deep Space Indigo `oklch(0.25 0.08 270)` - Communicates depth, intelligence, and infinite possibility
- **Secondary Colors**: 
  - Cosmic Purple `oklch(0.35 0.15 290)` - For builder elements and secondary actions
  - Nebula Blue `oklch(0.45 0.12 250)` - For informational states and hover effects
- **Accent Color**: Infinity Gold `oklch(0.75 0.15 85)` - Attention-grabbing highlight for CTAs, token indicators, and success states
- **Foreground/Background Pairings**:
  - Background (Deep Black `oklch(0.12 0 0)`): Light Gray text `oklch(0.95 0 0)` - Ratio 16.8:1 ✓
  - Primary (Deep Space Indigo `oklch(0.25 0.08 270)`): White text `oklch(1 0 0)` - Ratio 12.5:1 ✓
  - Accent (Infinity Gold `oklch(0.75 0.15 85)`): Deep Black text `oklch(0.12 0 0)` - Ratio 11.2:1 ✓
  - Cards (Dark Slate `oklch(0.18 0.02 260)`): Light Gray text `oklch(0.95 0 0)` - Ratio 13.4:1 ✓

## Font Selection

Typefaces should communicate **futuristic precision with human warmth** - technical enough to feel powerful, but approachable enough to inspire creativity.

- **Primary Font**: Space Grotesk - Modern geometric sans with tech aesthetic, perfect for the Infinity brand
- **Secondary Font**: Inter - Clean and readable for body content, research text, and long-form content
- **Monospace**: JetBrains Mono - For token IDs, wallet addresses, and technical metadata

**Typographic Hierarchy**:
- H1 (Infinity Logo/Brand): Space Grotesk Bold / 48px / tight letter-spacing (-0.02em)
- H2 (Page Titles): Space Grotesk Bold / 36px / normal letter-spacing
- H3 (Section Headers): Space Grotesk Medium / 24px / normal letter-spacing
- Body (Research Content): Inter Regular / 16px / line-height 1.6 / letter-spacing (-0.01em)
- Small (Metadata): Inter Medium / 14px / letter-spacing (-0.005em)
- Mono (Technical): JetBrains Mono Regular / 14px / letter-spacing (-0.02em)

## Animations

Animations should create a sense of **cosmic energy and instant materialization** - websites don't load, they materialize; tokens don't mint, they spark into existence. Use quick, purposeful motion with physics-based easing to make every action feel satisfying without creating delays. Key moments: search submission (ripple effect), website generation (particles coalescing), token minting (golden flash), page transitions (smooth depth shifts), builder toggle (elegant slide).

## Component Selection

- **Components**:
  - Input + Button (custom Infinity search bar) - Oversized, centered, with glow effects and Infinity icon
  - Card (website previews, token displays) - Dark with subtle borders, hover lifts with glow
  - Dialog (detailed website views, transaction confirmations) - Full-screen overlays with blur backdrop
  - Tabs (wallet sections: sites, tokens, transactions) - Minimal underline style
  - Badge (token IDs, valuations, status indicators) - Rounded, glowing, with animation
  - Avatar (owner indicators) - Generated from wallet addresses
  - Scroll Area (marketplace listings, research content) - Custom scrollbars matching theme
  - Tooltip (metadata on hover) - Quick, subtle, informative
  - Toast (sonner for success/error notifications) - Positioned top-right, with icons

- **Customizations**:
  - Infinity Search Component - Custom oversized input with animated Infinity symbol button
  - Cosmic Background - Animated gradient mesh with subtle particle effects
  - Token Card - Custom component showing website preview + token metadata + value
  - Builder Panel - Slide-in panel with embedded search and page management
  - Website Generator Preview - Live loading state with progress visualization

- **States**:
  - Buttons: Default (subtle glow), Hover (increased glow + scale 1.02), Active (pressed scale 0.98), Disabled (reduced opacity + no glow)
  - Inputs: Default (border glow), Focus (expanded glow + ring), Filled (accent border), Error (red glow)
  - Cards: Default (subtle elevation), Hover (lift + stronger glow + border brightens), Selected (accent border + glow)

- **Icon Selection**:
  - Infinity symbol (custom SVG) - Main brand icon for search
  - MagnifyingGlass (search within builder) - Secondary search actions
  - Wallet (wallet view) - User's token collection
  - Storefront (marketplace) - Trading and browsing
  - Plus (add page, create new) - Creation actions
  - Eye (preview, view) - Viewing actions
  - ArrowsClockwise (rebuild, refresh) - Recovery actions
  - CaretRight/CaretLeft (navigation) - Browsing
  - Crown (ownership indicator) - Owner badges
  - Sparkle (token mint success) - Success states

- **Spacing**:
  - Sections: gap-16 (4rem) between major sections
  - Cards: gap-6 (1.5rem) in grids, padding-6 internal
  - Inputs: padding-4 (1rem) vertical, padding-6 (1.5rem) horizontal
  - Buttons: padding-3 (0.75rem) vertical, padding-8 (2rem) horizontal for primary
  - Content: padding-8 (2rem) for page containers

- **Mobile**:
  - Infinity search bar remains centered and prominent, slightly smaller
  - Marketplace switches from grid to single column
  - Builder panel becomes full-screen overlay on mobile
  - Token cards stack vertically with full width
  - Navigation becomes bottom tab bar on mobile
  - Wallet view uses accordion for sections instead of tabs
