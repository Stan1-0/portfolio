'use client';

import { useEffect } from 'react';

interface CredlyBadgeProps {
    badgeId: string;
    width?: number;
    height?: number;
}

export const CredlyBadge = ({ badgeId, width = 150, height = 270 }: CredlyBadgeProps) => {
    useEffect(() => {
        // Load the Credly embed script dynamically
        const existingScript = document.querySelector(
            'script[src*="credly.com/assets/utilities/embed.js"]'
        );
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '//cdn.credly.com/assets/utilities/embed.js';
            script.async = true;
            document.body.appendChild(script);
        } else {
            // If script already exists, re-trigger badge rendering
            // Credly's script looks for unprocessed badge divs
            (window as any).credlyEmbed?.init?.();
        }
    }, [badgeId]);

    return (
        <div
            data-iframe-width={width}
            data-iframe-height={height}
            data-share-badge-id={badgeId}
            data-share-badge-host="https://www.credly.com"
        />
    );
};
