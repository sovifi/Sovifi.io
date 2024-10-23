# Sovifi: Revolutionizing Music Fan Clubs with Blockchain

![GitHub stars](https://img.shields.io/github/stars/sovifi/Sovifi.io?style=social)
![GitHub forks](https://img.shields.io/github/forks/sovifi/Sovifi.io?style=social)
![License](https://img.shields.io/github/license/sovifi/Sovifi.io)
![Version](https://img.shields.io/github/package-json/v/sovifi/Sovifi.io)
![Last Commit](https://img.shields.io/github/last-commit/sovifi/Sovifi.io)

## Project Status

⚠️ **Please Note**: Sovifi is currently in active development (Phase 1 MVP). Some features described may be partially implemented or planned for future releases.

## Overview

Sovifi is pioneering the future of music fan clubs by leveraging blockchain technology and NFTs to create immersive, interactive, and rewarding experiences for both artists and fans. We're reimagining the concept of fan engagement in the music industry, inspired by successful NFT projects like VeeFriends, CryptoPunks, and Bored Ape Yacht Club.

## Our Vision

At Sovifi, we believe that NFTs are more than just digital art or speculative assets. We're harnessing the power of blockchain to:

- Create "Creator Clubs": Blockchain-based fan clubs that seamlessly integrate with artists' established fan bases.
- Provide tangible utility and transform how fans interact with digital and real-world experiences.
- Offer exclusive content, event access, and new ways for fans and artists to engage.
- Develop a comprehensive scorecard for fan engagement in the complex music business ecosystem.

## Current State of the Project

Sovifi is currently in Phase 1 of development, focusing on building an MVP (Minimum Viable Product) with core features. Future phases will introduce additional functionalities and enhancements.

### Phase 1 MVP Features

1. **Token-Gated Perks and Rewards**
   - Powered by ThirdWeb & Tokenproof
   - Artists can toggle perks on/off for NFT holders through the Sovifi dashboard

2. **Perk Management & Redemption**
   - Custom smart contracts using ThirdWeb's framework
   - Integration with automation tools like Zapier for notifications

3. **Ticketing & Event Access**
   - NFT-based ticketing using NiftyKit
   - Tokenproof for validating ticket ownership

4. **Social & Streaming Analytics**
   - Web3Sense.ai for social media tracking
   - Spotify API and Last.fm for streaming data
   - Data stored and managed in Supabase

5. **User-Friendly Dashboard**
   - Built with Next.js and Supabase
   - Provides insights on NFT sales, analytics, and fan engagement

### Future Phases

- **Phase 2**: Addition of merchandise stores, tiered rewards systems, and enhanced artist profile backend features
- **Phase 3**: Advanced analytics capabilities

## Technology Stack

### Frontend
- **Next.js**: For building a scalable and efficient user interface
- **Tailwind CSS**: For rapid and responsive styling
- **Vercel**: For seamless deployment and hosting

### Backend
- **Supabase**: For robust database management, real-time interactions, and API integrations

### Key Integrations (Planned or Potential)
- **ThirdWeb**: For NFT minting and smart contract management, providing a flexible foundation for our token-gated features
- **Tokenproof**: For secure NFT ownership validation, ensuring reliable access control
- **NiftyKit**: For NFT-based ticketing, revolutionizing event access
- **Web3Sense.ai**: For comprehensive social media analytics
- **Spotify API**: For accessing music streaming data, providing valuable insights into fan engagement
- **Last.fm API**: For detailed fan listening history and scrobbles
- **Zapier**: For automating notifications and integrations, streamlining workflows

### Additional Tools
- **Cursor**: AI-powered development tool for enhanced productivity
- **V0**: AI tool for rapid initial build-out

## Key Features

1. **Token-Gated Perks**: Exclusive rewards for NFT holders
2. **Smart Contract-Based Perk Management**: Automated reward distribution
3. **NFT Ticketing**: Secure and verifiable event access
4. **Comprehensive Analytics**: Combining social media and streaming data
5. **Artist Dashboard**: Easy-to-use interface for managing fan engagement
6. **OAuth Integration**: Connecting with Spotify and Last.fm for data collection
7. **Historical Data Building**: Regular polling of APIs to build engagement history

## Getting Started

To set up and run Sovifi locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

### Installation

1. Clone the repository
   ```
   git clone https://github.com/sovifi/Sovifi.io.git
   cd Sovifi.io
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
   ```
   (Replace the values with your actual API keys and URLs)

4. Run the development server
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

### Running Tests

To run the test suite:

npm test


### Building for Production

To create a production build:

npm run build


Then, to start the production server:

npm start 


## User Flows

### Artists
1. Connect wallet using ThirdWeb
2. Mint NFTs and set up perks
3. Manage events and ticketing through NiftyKit
4. View analytics and engagement data on the dashboard

### Fans
1. Purchase NFTs for access to exclusive perks
2. Use NFTs as tickets for events
3. Connect Spotify and Last.fm accounts for engagement tracking
4. Redeem perks and rewards based on NFT ownership and engagement

## Contributing

We welcome contributions from the community! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to get involved.

## Roadmap

- **Phase 1 (Current)**: MVP development with core features
- **Phase 2**: Integration of merchandise stores, tiered rewards, and enhanced artist backend
- **Phase 3**: Advanced analytics and data visualization

## Security

Security is a top priority for Sovifi. We are committed to implementing robust security measures to protect our systems and user data. Our development process includes:

- Regular security audits
- Implementation of best practices in smart contract development
- Secure handling of user data and authentication
- Ongoing monitoring for potential vulnerabilities

As we grow, we plan to collaborate with cybersecurity experts to further enhance our security protocols.

## The Future of Fan Engagement

Sovifi aims to lead by example, demonstrating that blockchain technology extends beyond digital art and promises tangible improvements in fans' lives within the complex music industry. We are actively exploring partnerships and integrations that will help us realize our vision of a more connected and rewarding music ecosystem.

Our goals include:
- Developing scannable merchandise for enhanced fan experiences
- Creating blockchain-based fan communities for artists
- Simplifying Web3 interactions for both artists and fans

We envision a future where more artists' fan clubs and communities reside on the blockchain, offering unprecedented levels of engagement and reward for dedicated fans.

## Architecture Overview

[Consider adding a simple diagram here showing how frontend, backend, and blockchain components interact]

## FAQ

Q: Is Sovifi ready for production use?
A: Not yet. We're currently in the MVP phase and actively developing core features.

Q: How can I contribute to Sovifi?
A: We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

Q: Where can I find more detailed technical documentation?
A: We're in the process of creating comprehensive documentation. For now, please refer to inline code comments and this README.

## Troubleshooting

If you encounter any issues during setup or development, please check our [TROUBLESHOOTING.md](TROUBLESHOOTING.md) or open an issue on GitHub.

## Changelog

For a detailed changelog, please see the [CHANGELOG.md](CHANGELOG.md) file.

## Contact

(Add contact information or links to social media)

## License

(Add license information)
