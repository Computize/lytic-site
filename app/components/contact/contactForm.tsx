'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormWrapper } from '~/app/components/formWrapper';
import { Button } from '~/components/ui/button';
import { FormField, FormItem, FormControl, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { useToast } from '~/components/ui/use-toast';

const contactSchema = z.object({
  fullName: z
    .string({
      required_error: 'Full name is required',
      invalid_type_error: 'Full name must be a string',
    })
    .max(100)
    .trim(),
  emailAddress: z
    .string({
      required_error: 'Email address is required',
      invalid_type_error: 'Email address must be a string',
    })
    .email()
    .trim(),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must be a string',
    })
    .trim(),
  state: z
    .string({
      required_error: 'This field is required',
      invalid_type_error: 'This field must be a string',
    })
    .trim(),
  howCanWeHelp: z
    .string({
      required_error: 'This field is required',
      invalid_type_error: 'This field must be a string',
    })
    .trim(),
});
type ContactSchema = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      emailAddress: '',
      fullName: '',
      howCanWeHelp: '',
      phoneNumber: '',
      state: '',
    },
  });

  return (
    <div className="flex flex-col justify-center gap-6 items-center">
      <FormWrapper
        form={form}
        onSubmit={async (values: ContactSchema) => {
          setIsLoading(true);
          const response = await fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(values),
          });
          if (!response.ok) {
            toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description: 'There was an issue sending the request',
            });
            setIsLoading(false);
          } else {
            form.setValue('emailAddress', '');
            form.setValue('fullName', '');
            form.setValue('howCanWeHelp', '');
            form.setValue('state', '');
            form.setValue('phoneNumber', '');
            toast({
              className: 'bg-primary-green',
              variant: 'default',
              title: 'Success!',
              description: 'Your contact request has been sent.',
            });
            setIsLoading(false);
          }
        }}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none w-[300px] md:w-[600px] placeholder:italic"
                  autoComplete=""
                  placeholder="Full Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none w-[300px] md:w-[600px] placeholder:italic"
                  placeholder="Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none w-[300px] md:w-[600px] placeholder:italic"
                  placeholder="Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none w-[300px] md:w-[600px] placeholder:italic"
                  placeholder="State"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="howCanWeHelp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="rounded-none h-52 w-[300px] md:w-[600px] placeholder:italic"
                  placeholder="How can we help?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col justify-center items-center">
          <Button
            type="submit"
            disabled={isLoading}
            className="rounded-none w-32 bg-secondary-green font-bold"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'SEND'}
          </Button>
        </div>
      </FormWrapper>
    </div>
  );
};
