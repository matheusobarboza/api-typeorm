import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Room } from "./Room";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => Room, (room) => room.subjects)
  @JoinTable({
    name: "room_subject",
    joinColumn: {
      name: "room_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "subject_id",
      referencedColumnName: "id"
    }
  }) //usa jointable quando é uma entidade que liga outras duas, já joincolumn é quando liga apenas uma
  rooms: Room[];
}
