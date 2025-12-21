"use client";

import { useState } from "react";
import FormInput from "@/components/formInput/FormInput";
import Button from "@/components/button/Button";
import { Enemy } from "@/features/test/enemy/enemy.types";
import {v4 as guid} from "uuid";

export default function EnemyForm() {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [ac, setAc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: Enemy = {
      id: guid(),
      name,
      hp: Number(hp),
      armorClass: Number(ac),
    };

    console.log(`Data: ${data.id} ${data.name} ${data.hp} ${data.armorClass}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <FormInput
        label="Enemy name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Skeleton"
        required
      />

      <FormInput
        label="Health points"
        value={hp}
        onChange={e => setHp(e.target.value)}
        placeholder="20"
        type="number"
        min={0}
        required
      />

      <FormInput
        label="Armor class"
        value={ac}
        onChange={e => setAc(e.target.value)}
        placeholder="10"
        type="number"
        min={0}
        required
      />

      <Button type="submit">
        Save enemy
      </Button>
    </form>
  );
}
