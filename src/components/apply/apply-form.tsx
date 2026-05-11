"use client";

import * as React from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import type { ApplicationType } from "@/types/content";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

const applicationSchema = z.object({
  type: z.enum(["consultation", "program", "waitlist"]),
  guardianName: z.string().trim().min(2, "보호자 성함을 입력해 주세요."),
  childName: z.string().trim().min(2, "아이 이름을 입력해 주세요."),
  childAge: z.string().trim().min(1, "나이 또는 학년을 적어 주세요."),
  concerns: z.string().trim().min(8, "간단한 상담 목적을 적어 주세요."),
  phone: z.string().trim().min(9, "연락 가능한 전화번호를 입력해 주세요."),
  email: z.string().trim().email("올바른 이메일 형식인지 확인해 주세요."),
  preferredSchedule: z.string().trim().min(4, "희망 일정을 적어 주세요."),
  programSlug: z.string().optional(),
});

type ApplicationValues = z.infer<typeof applicationSchema>;

const typeCopy: Record<ApplicationType, { label: string }> = {
  consultation: { label: "상담" },
  program: { label: "프로그램" },
  waitlist: { label: "대기" },
};

function InnerApplyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const presetProgram = searchParams.get("program");
  const presetType = searchParams.get("type");
  const presetFocus = searchParams.get("focus");

  const [submittedPayload, setSubmittedPayload] =
    React.useState<ApplicationValues | null>(null);

  const defaultType: ApplicationValues["type"] =
    presetType === "education"
      ? "program"
      : presetProgram
        ? "program"
        : "consultation";

  const presetSlug = presetProgram?.trim();
  const matchedProgram = presetSlug
    ? programs.find((p) => p.slug === presetSlug)
    : undefined;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      type: defaultType,
      guardianName: "",
      childName: "",
      childAge: "",
      concerns:
        presetFocus?.startsWith("assessment")
          ? "홈페이지에 안내된 평가에 대해 상담을 받고 싶습니다."
          : "",
      phone: "",
      email: "",
      preferredSchedule: "",
      programSlug: matchedProgram?.slug ?? "",
    },
    mode: "onBlur",
  });

  React.useEffect(() => {
    if (!matchedProgram) return;
    setValue("programSlug", matchedProgram.slug);
    setValue("type", "program");
    setValue("concerns", `「${matchedProgram.title}」 프로그램에 관심이 있습니다.`);
  }, [matchedProgram, setValue]);

  const watchedType = watch("type");

  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (values: ApplicationValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("server_error");
    } catch {
      setSubmitError("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    setSubmittedPayload(values);
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.replace("/apply");
  };

  if (submittedPayload) {
    const programSummary = programs.find(
      (p) => p.slug === submittedPayload.programSlug,
    );
    return (
      <section className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#2DD4BF]/40 bg-[#F0FFFA]/80 p-8 shadow-sm">
          <p className="text-[11px] font-semibold tracking-[0.06em] text-[#065F57]">
            접수 완료
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">
            감사합니다.
          </h1>
          <p className="mt-3 text-sm text-[#6B7280]">
            영업일 기준 1일 이내 담당자가 연락드립니다.
          </p>
          <dl className="mt-6 space-y-3 rounded-[18px] border border-[#E5E7EB]/80 bg-white/90 p-5 text-sm text-[#475569]">
            <div>
              <dt className="text-[11px] font-semibold tracking-wide text-[#9CA3AF]">
                유형
              </dt>
              <dd className="mt-1 font-medium text-[#111827]">
                {typeCopy[submittedPayload.type].label}
              </dd>
            </div>
            {programSummary ? (
              <div>
                <dt className="text-[11px] font-semibold tracking-wide text-[#9CA3AF]">
                  프로그램
                </dt>
                <dd className="mt-1 font-medium text-[#111827]">{programSummary.title}</dd>
              </div>
            ) : null}
            <div>
              <dt className="text-[11px] font-semibold tracking-wide text-[#9CA3AF]">
                가족
              </dt>
              <dd className="mt-1">
                {submittedPayload.guardianName} · {submittedPayload.childName},{" "}
                {submittedPayload.childAge}
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="ghost"
              onClick={() => {
                setSubmittedPayload(null);
                reset();
              }}
            >
              다시 작성
            </Button>
            <Button variant="secondary" href="/">
              홈으로
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-[#E5E7EB]/80 bg-white pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[minmax(0,17rem)_1fr] lg:items-start lg:gap-14 lg:px-8">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold tracking-[0.06em] text-[#9CA3AF]">
            상담·접수
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">
            문의 양식
          </h1>
          <p className="mt-3 text-sm text-[#6B7280]">상담 · 프로그램 · 대기를 한 번에 접수합니다.</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 rounded-[22px] border border-[#E5E7EB] bg-[#FAFBFC] p-6 shadow-sm md:p-8"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-[#9CA3AF]">
              접수 유형
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {(Object.keys(typeCopy) as ApplicationType[]).map((value) => (
                <label
                  key={value}
                  className={cn(
                    "flex cursor-pointer items-center justify-center rounded-xl border px-3 py-3 text-center text-sm font-semibold transition-all duration-200",
                    watchedType === value
                      ? "border-[#1A2B4C] bg-[#1A2B4C] text-white shadow-sm"
                      : "border-[#E5E7EB] bg-white hover:border-[#2DD4BF]/35",
                  )}
                >
                  <input
                    type="radio"
                    value={value}
                    className="sr-only"
                    {...register("type")}
                  />
                  {typeCopy[value].label}
                </label>
              ))}
            </div>
            {errors.type ? (
              <p className="mt-2 text-sm text-red-600">{errors.type.message}</p>
            ) : null}
          </div>

          {matchedProgram ? <input type="hidden" {...register("programSlug")} /> : null}

          {matchedProgram ? (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#2DD4BF]/35 bg-[#F0FFFA]/70 px-4 py-3 text-sm text-[#065F57]">
              <span className="font-medium">{matchedProgram.title}</span>
              <button
                type="button"
                className="text-xs font-semibold text-[#10443D] underline-offset-2 hover:underline"
                onClick={() => {
                  setValue("programSlug", "");
                  router.push("/apply");
                }}
              >
                연결 해제
              </button>
            </div>
          ) : (
            <div>
              <label className="text-sm font-semibold text-[#111827]">프로그램 (선택)</label>
              <select
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC]/80 px-4 py-3 text-sm outline-none ring-[#2DD4BF]/30 focus-visible:ring-4"
                {...register("programSlug")}
              >
                <option value="">미정</option>
                {programs.map((program) => (
                  <option key={program.slug} value={program.slug}>
                    {program.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label="보호자 성함"
              {...register("guardianName")}
              error={errors.guardianName?.message}
            />
            <Field
              label="아이 이름"
              {...register("childName")}
              error={errors.childName?.message}
            />
            <Field
              label="나이 / 학년"
              placeholder="예: 만 11세 · 초등 6학년"
              {...register("childAge")}
              error={errors.childAge?.message}
            />
            <Field
              label="연락처"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Field
              label="이메일"
              type="email"
              className="md:col-span-2"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <TextAreaField
            label="상담 목적 · 고민"
            rows={5}
            {...register("concerns")}
            error={errors.concerns?.message}
          />

          <Field
            label="희망 일정"
            placeholder="가능한 요일·시간대를 적어 주세요"
            {...register("preferredSchedule")}
            error={errors.preferredSchedule?.message}
          />

          <div className="flex flex-wrap gap-4">
            <Button type="submit" disabled={isSubmitting} loading={isSubmitting} glass showArrow>
              제출하기
            </Button>
            <Button
              type="button"
              variant="secondary"
              motionInteractive={false}
              onClick={() => reset()}
            >
              양식 비우기
            </Button>
          </div>
          {submitError && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {submitError}
            </p>
          )}
          <p className="text-[11px] text-[#94A3B8]">
            작성하신 정보는 상담 안내 목적으로만 사용됩니다.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className={cn("flex flex-col text-sm font-medium text-[#111827]", className)}>
      {label}
      <input
        className="mt-2 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC]/85 px-4 py-3 text-[15px] font-normal text-[#111827] outline-none ring-[#2DD4BF]/30 transition-shadow focus-visible:shadow-lg focus-visible:shadow-[#2DD4BF]/35 focus-visible:ring-4"
        {...props}
      />
      {error ? <span className="mt-2 text-xs font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}

function TextAreaField({
  label,
  error,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className={cn("flex flex-col text-sm font-medium text-[#111827]", className)}>
      {label}
      <textarea
        className="mt-2 min-h-[170px] resize-y rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC]/85 px-4 py-3 text-[15px] font-normal leading-relaxed text-[#111827] outline-none ring-[#2DD4BF]/30 transition-shadow focus-visible:shadow-lg focus-visible:shadow-[#2DD4BF]/35 focus-visible:ring-4"
        {...props}
      />
      {error ? <span className="mt-2 text-xs font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}

function ApplyQueryShell() {
  const searchParams = useSearchParams();
  return <InnerApplyForm key={searchParams.toString()} />;
}

export function ApplyForm() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center text-sm font-semibold text-[#64748B]">
          상담 양식을 불러오는 중입니다…
        </div>
      }
    >
      <ApplyQueryShell />
    </Suspense>
  );
}
