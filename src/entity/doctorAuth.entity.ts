import { IsNotEmpty } from "class-validator"
import { Column, CreateDateColumn, Entity, ObjectID, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { DoctorAuth } from "../interfaces/doctorAuth.interface"

@Entity()
export class DoctorAuthEntity implements DoctorAuth {
    @PrimaryGeneratedColumn()
    id: ObjectID
    
    @Column()
    email: string

    @Column()
    @IsNotEmpty()
    password: string
    
    @Column()
    @IsNotEmpty()
    certificateId: number
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}