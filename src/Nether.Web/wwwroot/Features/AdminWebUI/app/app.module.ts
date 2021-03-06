﻿// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { Configuration } from "./app.constants";
import { SecurityService } from "./services/security";
import { AppComponent } from "./app.component";
import { PlayersComponent } from "./players/players.component";
import { PlayerDetailsComponent } from "./players/player-details.component";
import { LoginComponent } from "./login/login.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { LeaderboardScoresComponent } from "./leaderboard/leaderboard-scores.component";
import { GroupsComponent } from "./groups/groups.component";
import { GroupDetailsComponent } from "./groups/group-details.component";
import { AuthGuard } from "./_guards/auth.guard";
import { NetherApiService } from "./nether.api";

const appRoutes: Routes = [
    { path: "players", component: PlayersComponent, canActivate: [AuthGuard] },
    { path: "player/:tag", component: PlayerDetailsComponent, canActivate: [AuthGuard] },
    { path: "groups", component: GroupsComponent, canActivate: [AuthGuard] },
    { path: "group/:name", component: GroupDetailsComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "leaderboard", component: LeaderboardComponent, canActivate: [AuthGuard] },
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        PlayersComponent, PlayerDetailsComponent,
        LoginComponent,
        LeaderboardScoresComponent, LeaderboardComponent,
        GroupsComponent, GroupDetailsComponent
    ],
    providers: [
        AuthGuard,
        NetherApiService,
        Configuration,
        SecurityService
    ],
    bootstrap: [
      AppComponent
   ]
})

export class AppModule { }