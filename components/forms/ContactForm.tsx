'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  profile: z.string().min(1, 'Selecione um perfil'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  consent: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">{t('name')}</Label>
        <Input
          id="name"
          {...register('name')}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">{t('email')}</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">{t('phone')}</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="profile">{t('profile')}</Label>
        <Select onValueChange={(value: string) => setValue('profile', value)} disabled={isSubmitting}>
          <SelectTrigger id="profile">
            <SelectValue placeholder={t('profile')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="parent">{t('profiles.parent')}</SelectItem>
            <SelectItem value="athlete">{t('profiles.athlete')}</SelectItem>
            <SelectItem value="club">{t('profiles.club')}</SelectItem>
          </SelectContent>
        </Select>
        {errors.profile && (
          <p className="text-sm text-red-500 mt-1">{errors.profile.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={4}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="consent"
          onCheckedChange={(checked: boolean) => setValue('consent', checked)}
          disabled={isSubmitting}
        />
        <label
          htmlFor="consent"
          className="text-sm text-gray-600 cursor-pointer"
        >
          {t('consent')}
        </label>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 text-green-800 p-3 rounded-md">
          {t('success')}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 text-red-800 p-3 rounded-md">
          {t('error')}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('submitting')}
          </>
        ) : (
          t('submit')
        )}
      </Button>
    </form>
  );
}