<script>
  import { runbooks } from "./runbooks.js";
  import { recipeById } from "./recipes.js";
  export let lang = "eng";
  let active = "";
  let observation = "";
  $: current = runbooks.find((item) => item.id === active);
  $: selectedObservation = current?.observations.find((item) => item.id === observation);
</script>

<section class="runbooks" aria-labelledby="runbooks-title">
  <p class="section-kicker">{lang === "ru" ? "Диагностика" : "Troubleshooting"}</p>
  <h2 id="runbooks-title">{lang === "ru" ? "Три сценария инцидентов" : "Three incident playbooks"}</h2>
  <div class="runbook-tabs" role="group" aria-label={lang === "ru" ? "Выбрать сценарий" : "Choose playbook"}>
    {#each runbooks as item}<button type="button" aria-pressed={active === item.id} on:click={() => { active = item.id; observation = ""; }}>{item.title[lang]}</button>{/each}
  </div>
  {#if current}
    <article class="runbook-card">
      <h3>{current.title[lang]}</h3>
      <p><strong>{lang === "ru" ? "Симптом:" : "Symptom:"}</strong> {current.symptom[lang]}</p>
      <p><strong>{lang === "ru" ? "Входные данные:" : "Inputs:"}</strong> {current.input[lang]}</p>
      <h4>{lang === "ru" ? "Диагностические шаги" : "Diagnostic steps"}</h4>
      <ol>{#each current.steps as id}<li><a href={`?recipe=${id}#recipes`}>{recipeById[id].title[lang]}</a> — <code>{recipeById[id].command}</code></li>{/each}</ol>
      <p><strong>{lang === "ru" ? "Ожидаемый результат:" : "Expected result:"}</strong> {current.expected[lang]}</p>
      <label>{lang === "ru" ? "Что вы наблюдаете?" : "What do you observe?"}<select bind:value={observation}><option value="">{lang === "ru" ? "Выберите наблюдение" : "Choose an observation"}</option>{#each current.observations as item}<option value={item.id}>{item.label[lang]}</option>{/each}</select></label>
      {#if selectedObservation}<p class="runbook-next" role="status">{selectedObservation.next[lang]}</p>{/if}
      <p class="runbook-limits"><strong>{lang === "ru" ? "Ограничения:" : "Limits:"}</strong> {current.limits[lang]}</p>
    </article>
  {/if}
</section>
