import attackImage from './osrs-skill-1.png';
import strengthImage from './osrs-skill-2.png';
import defenceImage from './osrs-skill-3.png';
import rangedImage from './osrs-skill-4.png';
import prayerImage from './osrs-skill-5.png';
import magicImage from './osrs-skill-6.png';
import runecraftImage from './osrs-skill-7.png';
import constructionImage from './osrs-skill-8.png';
import hitpointsImage from './osrs-skill-9.png';
import agilityImage from './osrs-skill-10.png';
import herbloreImage from './osrs-skill-11.png';
import thievingImage from './osrs-skill-12.png';
import craftingImage from './osrs-skill-13.png';
import fletchingImage from './osrs-skill-14.png';
import slayerImage from './osrs-skill-15.png';
import hunterImage from './osrs-skill-16.png';
import miningImage from './osrs-skill-17.png';
import smithingImage from './osrs-skill-18.png';
import fishingImage from './osrs-skill-19.png';
import cookingImage from './osrs-skill-20.png';
import firemakingImage from './osrs-skill-21.png';
import woodcuttingImage from './osrs-skill-22.png';
import farmingImage from './osrs-skill-23.png';

export enum Skill {
    Attack = 'Attack',
    Strength = 'Strength',
    Defence = 'Defence',
    Ranged = 'Ranged',
    Prayer = 'Prayer',
    Magic = 'Magic',
    Runecraft = 'Runecraft',
    Construction = 'Construction',
    Hitpoints = 'Hitpoints',
    Agility = 'Agility',
    Herblore = 'Herblore',
    Thieving = 'Thieving',
    Crafting = 'Crafting',
    Fletching = 'Fletching',
    Slayer = 'Slayer',
    Hunter = 'Hunter',
    Mining = 'Mining',
    Smithing = 'Smithing',
    Fishing = 'Fishing',
    Cooking = 'Cooking',
    Firemaking = 'Firemaking',
    Woodcutting = 'Woodcutting',
    Farming = 'Farming',
};

export type SkillDefinition<T extends Skill = Skill> = {
    name: T;
    image: string;
    allowed?: Array<string>;
};

export const skillDefinitions: { [key in Skill]: SkillDefinition<key> } = {
    [Skill.Attack]: {
        name: Skill.Attack,
        image: attackImage,
    },
    [Skill.Strength]: {
        name: Skill.Strength,
        image: strengthImage,
    },
    [Skill.Defence]: {
        name: Skill.Defence,
        image: defenceImage,
    },
    [Skill.Ranged]: {
        name: Skill.Ranged,
        image: rangedImage,
    },
    [Skill.Prayer]: {
        name: Skill.Prayer,
        image: prayerImage,
    },
    [Skill.Magic]: {
        name: Skill.Magic,
        image: magicImage,
        allowed: ['Mage'],
    },
    [Skill.Runecraft]: {
        name: Skill.Runecraft,
        image: runecraftImage,
        allowed: ['Runecrafting'],
    },
    [Skill.Construction]: {
        name: Skill.Construction,
        image: constructionImage,
    },
    [Skill.Hitpoints]: {
        name: Skill.Hitpoints,
        image: hitpointsImage,
        allowed: ['HP'],
    },
    [Skill.Agility]: {
        name: Skill.Agility,
        image: agilityImage,
    },
    [Skill.Herblore]: {
        name: Skill.Herblore,
        image: herbloreImage,
    },
    [Skill.Thieving]: {
        name: Skill.Thieving,
        image: thievingImage,
    },
    [Skill.Crafting]: {
        name: Skill.Crafting,
        image: craftingImage,
    },
    [Skill.Fletching]: {
        name: Skill.Fletching,
        image: fletchingImage,
    },
    [Skill.Slayer]: {
        name: Skill.Slayer,
        image: slayerImage,
    },
    [Skill.Hunter]: {
        name: Skill.Hunter,
        image: hunterImage,
    },
    [Skill.Mining]: {
        name: Skill.Mining,
        image: miningImage,
    },
    [Skill.Smithing]: {
        name: Skill.Smithing,
        image: smithingImage,
    },
    [Skill.Fishing]: {
        name: Skill.Fishing,
        image: fishingImage,
    },
    [Skill.Cooking]: {
        name: Skill.Cooking,
        image: cookingImage,
    },
    [Skill.Firemaking]: {
        name: Skill.Firemaking,
        image: firemakingImage,
    },
    [Skill.Woodcutting]: {
        name: Skill.Woodcutting,
        image: woodcuttingImage,
    },
    [Skill.Farming]: {
        name: Skill.Farming,
        image: farmingImage,
    },
};
