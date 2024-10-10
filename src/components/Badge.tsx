import React from "react";
export type BadgeVariant = 'warning' | 'clean' | 'suspicious' | 'malicious' | 'likelyMalicious' | 'notDetected' | 'low' | 'veryLow' | 'unknown';

export interface BadgeProps {
    label: string | number;
    variant: BadgeVariant;
}

export const variants = {
    'warning': 'font-simplon-mono whitespace-nowrap bg-yellow-orange text-black items-center text-sm/5 font-normal px-1',
    'notDetected': 'font-simplon-mono whitespace-nowrap bg-dark-spell text-white items-center text-sm font-normal px-1 leading-5',
    'unknown': 'font-simplon-mono whitespace-nowrap bg-twilight-grey text-black items-center text-sm font-normal px-1 leading-5',
    'clean': "font-simplon-mono whitespace-nowrap bg-fine-pine text-white items-center text-sm font-normal px-1 leading-5",
    'veryLow': 'whitespace-nowrap bg-bluerocratic text-white items-center text-sm font-normal px-1 leading-5',
    'low': 'font-simplon-mono whitespace-nowrap bg-bitcoin text-black items-center text-sm font-normal px-1 leading-5',
    'likelyMalicious': 'font-simplon-mono whitespace-nowrap bg-epicurean-orange text-black items-center text-sm font-normal px-1 leading-5',
    'suspicious': 'font-simplon-mono whitespace-nowrap bg-laughing-orange text-black items-center text-sm font-normal px-1 leading-5',
    'malicious': 'font-simplon-mono bg-red-epiphyllum text-white items-center text-sm font-normal px-1 leading-5 max-w-[250px] sm:max-w-none truncate sm:truncate-none sm:whitespace-nowrap',
};

export const Badge = ({ label, variant }: BadgeProps) => {
    const className = variants[variant];

    return (
        <span className={className}>{label}</span>
    );
};
