'use client'
import "@rainbow-me/rainbowkit/styles.css";
import { 
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
  } from '@zerodevapp/wagmi/rainbowkit';
import { RainbowKitProvider,connectorsForWallets } from '@rainbow-me/rainbowkit';
//import { rainbowWallet, metamaskWallet } from "@rainbow-me/rainbowkit/wallets";
import {configureChains, createClient,WagmiConfig} from 'wagmi'
import { polygonMumbai } from 'wagmi/chains';
import {publicProvider} from 'wagmi/providers/public';
//import { enhanceWalletWithAAConnector } from "@zerodevapp/wagmi/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function RainbowSocialWallets(){
    const defaultProjectID='73748e98-6b11-44bf-a759-e4bc97d46197'
    const connectors=connectorsForWallets([
        {
            groupName:'SocialWallets',
            wallets:[
                googleWallet({options:{projectId:defaultProjectID}}),
                facebookWallet({options:{projectId:defaultProjectID}}),
                githubWallet({options:{projectId:defaultProjectID}}),
                discordWallet({options: { projectId: defaultProjectID }}),
                twitchWallet({options: { projectId: defaultProjectID }}),
                twitterWallet({options: { projectId: defaultProjectID }})
            ]
        }
    ])

    const {chains,provider,webSocketProvider}=configureChains([polygonMumbai],[publicProvider()]);
    const client=createClient({
        autoConnect:false,
        connectors,
        provider,
        webSocketProvider
    })
    return(
        <>
        <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains} modalSize={'compact'}>
                <ConnectButton />
            </RainbowKitProvider>
        </WagmiConfig>

        </>
    )
  }