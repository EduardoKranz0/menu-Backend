import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateGuestCheckSpot {
    @IsUUID()
    spotId: string;
}