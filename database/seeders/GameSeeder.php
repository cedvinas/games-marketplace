<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('games')->insert([
            'id' => 1,
            'title' => 'Grand Theft Auto V',
            'quantity' => 5,
            'description' => "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.
            The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A \"wanted\" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes. ",
            'image_link' => 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/228541e0-60ef-4add-b43f-99c4c67d2af9/d5vdqg1-a36f1e3e-eae3-49ae-bd01-59cef987484f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyODU0MWUwLTYwZWYtNGFkZC1iNDNmLTk5YzRjNjdkMmFmOVwvZDV2ZHFnMS1hMzZmMWUzZS1lYWUzLTQ5YWUtYmQwMS01OWNlZjk4NzQ4NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4b4K4JvUnOeQYwnIUL2Abu6hJ2iUU7F3QSKux84NdQg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 20,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 2,
            'title' => 'League of Legends',
            'quantity' => 7,
            'description' => "League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre. Since its release in October 2009, League has been free-to-play and is monetized through purchasable character customization. The game is available for Microsoft Windows and macOS.
            In the game, two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a \"champion\", with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team. In League's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their \"Nexus\", a large structure located within. ",
            'image_link' => 'https://s1.gaming-cdn.com/images/products/9456/orig-fallback-v1/league-of-legends-pc-game-cover.jpg?v=1645106548',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 10,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 3,
            'title' => 'Red Dead Redemption 2',
            'quantity' => 2,
            'description' => "Red Dead Redemption 2[a] is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The game's epilogue follows fellow gang member John Marston, the protagonist of Red Dead Redemption.
            The game is presented through both first and third-person perspectives, and the player may freely roam in its interactive open world. Gameplay elements include shootouts, heists, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds. A bounty system similar to the \"wanted\" system from the Grand Theft Auto franchise governs the response of law enforcement and bounty hunters to crimes committed by the player. Red Dead Online, the game's online multiplayer mode, lets up to 32 players engage in a variety of cooperative and competitive game modes. ",
            'image_link' => 'https://i.pinimg.com/originals/9a/3d/26/9a3d26c27922f794e95e28f75116d945.jpg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 60,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 4,
            'title' => 'Apex Legends',
            'quantity' => 5,
            'description' => "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, for Nintendo Switch in March 2021, and for PlayStation 5 and Xbox Series X/S in March 2022. A mobile version of the game designed for touchscreens titled Apex Legends Mobile was released in May 2022 on Android and iOS. The game supports cross-platform play, excluding the aforementioned mobile platforms.
            Before the match, players form into two- or three-player squads, and select from pre-designed characters with distinctive abilities, known as \"Legends\". The game has two gameplay modes. In \"Battle Royale\", up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat. The available play area on the island shrinks over time, forcing players to keep moving or else find themselves outside the play area which can be fatal. The final team alive wins the round. In \"Arenas\", players form into three-player squads and fight against another squad in a 3v3 team deathmatch over a series of rounds to determine the winner of the match. Teams win when their team has at least 3 points and is 2 points ahead. ",
            'image_link' => 'https://www.mobygames.com/images/covers/l/538006-apex-legends-xbox-one-front-cover.jpg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 30,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 5,
            'title' => 'PUBG: Battlegrounds',
            'quantity' => 5,
            'description' => "PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds) is a battle royale game developed and published by PUBG Studios, a subsidiary of Krafton. The game, which was inspired by the 2000 Japanese film Battle Royale, is based on previous mods created by Brendan \"PlayerUnknown\" Greene for other games, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island where they scavenge for weapons and equipment to kill other players while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into an ever tightening space to force encounters. The last surviving player (or team) wins the round. This is the first game in the series, named PUBG Universe. ",
            'image_link' => 'https://www.mobygames.com/images/covers/l/603530-playerunknown-s-battlegrounds-playstation-4-front-cover.jpg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 40,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 6,
            'title' => 'Osu!',
            'quantity' => 5,
            'description' => "Osu![a] (stylized as osu!) is a free-to-play rhythm game primarily developed, published, and created by Dean \"peppy\" Herbert. Inspired by iNiS' rhythm game Osu! Tatakae! Ouendan, it was written in C# on the .NET Framework,[6] and was released for Microsoft Windows on 16 September 2007. The game has throughout the years been ported to macOS, Linux, Android and iOS.
            Asides from Osu! Tatakae! Ouendan, the game has been inspired by titles such as Taiko no Tatsujin, Beatmania IIDX,[7] EZ2DJ(EZ2CATCH), Elite Beat Agents, O2Jam, StepMania and DJMax. All beatmaps in the game are community-made through the in-game map editor. Four different game modes exist, offering various ways to play a beatmap, which can also be combined with addable modifiers, increasing or decreasing the difficulty. ",
            'image_link' => 'https://external-preview.redd.it/CqDo0w4fHUxcgk_yQTOCW3w-_frmLiWKTlMM-DokCLU.jpg?auto=webp&s=6eb5f4e77e656d522183c58e190600a8aecc82ec',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 20,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 7,
            'title' => 'The Quarry',
            'quantity' => 5,
            'description' => "The Quarry is a 2022 interactive drama horror video game developed by Supermassive Games and published by 2K. Players assume control of nine teenage counsellors who must survive their last night at Hackett's Quarry summer camp amongst supernatural creatures and violent locals. Players make many choices throughout the game which may significantly impact character development, relationships, the story's plot and its ending. All nine playable characters may survive or die, depending on the player's decisions.
            Envisioned as the spiritual successor to Until Dawn (2015) and inspired by teen slasher and monster films such as Friday the 13th and The Thing, the game features a large ensemble cast including Brenda Song, David Arquette, Halston Sage, Ted Raimi, Ariel Winter, Lance Henriksen, and Justice Smith. The Quarry was released on 10 June 2022 for Windows, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S. ",
            'image_link' => 'https://www.mobygames.com/images/covers/l/817739-the-quarry-xbox-one-front-cover.jpg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 20,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 8,
            'title' => 'Escape from Tarkov',
            'quantity' => 5,
            'description' => "The developers of Escape from Tarkov refer to the game as a realistic and hardcore first-person shooter, survival video game that borrows elements from massively multiplayer online games. In its current state, Escape from Tarkov incorporates three different modes for the players to play: online PMC raids, Scav (short for \"scavenger\") raids,[3][2][4] and a temporary offline mode.[1] In these raids, players can choose to play solo or in groups and spawn on one side of a variety of maps to choose from in the game.[5] Once in-game, the players are given an extraction point on the other side of the map, and must fight against other players and non-player characters to reach that point in order to escape. In addition to these standard extractions, players are also given the opportunity to use \"optional\" extraction points near the middle of the map, but in order to do so you must meet various requirements per extract such as paying roubles (the primary in-game currency), not having a backpack, or having certain items equipped on their character.[6] In addition to combat, players can also find loot in these maps such as firearms, equipment, and armor, and once extracted, can store their loot in a stash to use in future raids or can be sold to other players in a virtual flea market if having a \"found in raid\" status.",
            'image_link' => 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2xlq.jpg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 20,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('games')->insert([
            'id' => 9,
            'title' => 'Elden Ring',
            'quantity' => 5,
            'description' => "Elden Ring[a] is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. It was directed by Hidetaka Miyazaki and made in collaboration with the fantasy writer George R. R. Martin, who provided material for the setting. It was released for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 25.
            In Elden Ring, players control a customizable player character known as a Tarnished, on a journey to repair the Elden Ring and become the new Elden Lord. The game is presented through a third-person perspective, with players freely roaming its interactive open world. Gameplay elements include combat using several types of weapons and magic spells, horseback riding, and crafting.
            FromSoftware wanted to create an open-world game with gameplay similar to their existing Souls series, intending Elden Ring to act as an evolution to Dark Souls. Miyazaki admired Martin's work, and hoped his contributions would produce a more accessible narrative than FromSoftware's previous games. Elden Ring received critical acclaim for its gameplay systems, exploration, and setting, with some criticism targeted towards its technical performance at launch. As with the Souls series, the game's difficulty had a polarized reception. By May 2022, the game had sold more than 13.4 million copies. ",
            'image_link' => 'https://m.media-amazon.com/images/I/614Y4NA6CVL._AC_SY679_.jpg',
            'key' => 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
            'price' => 20,
            'user_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ]);
    }
}
