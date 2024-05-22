import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pizza')
export class Pizza {
    @PrimaryGeneratedColumn('increment')
    ProductID: number;

    @Column('text', { nullable: false })
    ProductName: string;

    @Column('integer', { nullable: false })
    ProductTypeID: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    Price: number;
}